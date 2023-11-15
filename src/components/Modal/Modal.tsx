import { createContext, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './components/ModalOverlay';
import ModalContent from './components/ModalContent';
import ModalHeader from './components/ModalHeader';
import ModalBody from './components/ModalBody';
import ModalFooter from './components/ModalFooter';
import { getAnimatedAttr } from './utils/getAnimatedAttr';
import { DURATION } from './constant';

export interface ModalProps {
    /**
     * @desc 是否打开
     */
    isOpen: Boolean;
    /**
     * @desc 打开回调函数
     */
    onOk?: Function;
    /**
     * @desc 关闭回调函数
     */
    onCancel?: Function;
    /**
     * @desc 宽度。width与style.width相比，witdh优先级更高。
     */
    width?: number | string;
    /**
     * @desc 标题
     */
    title?: string;
    /**
     * @desc 页脚内容
     */
    footer?: ReactNode;
    /**
     * @desc 弹出框打开时页面是否可以滚动。 false：允许滚动。
     */
    blockScroll?: Boolean;
    /**
     * @desc 用户传递的样式
     */
    style?: Object;
    /**
     * @desc 主体内容
     */
    children?: ReactNode;
}

export interface ModalContext extends Partial<ModalProps> {
    onOk?: Function;
    onCancel?: Function;
}

export const ModalContext = createContext<ModalContext>({
    isOpen: undefined,
    onOk: undefined,
    onCancel: undefined,
});

const Modal = ({
    style,
    isOpen,
    onOk,
    onCancel,
    width,
    title = 'title',
    footer,
    blockScroll = true,
    children,
}: ModalProps) => {
    const modalRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [animatedVisible, setAnimatedVisible] = useState(isOpen);
    const {
        ModalContentWidth,
        ModalContentTop,
        AfterModalContentWidth,
        AfterModalContentTop,
    } = getAnimatedAttr(width, style);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            setTimeout(() => {
                setAnimatedVisible(true);
            }, 20);
            if (blockScroll) document.body.style.overflow = 'hidden'; //避免弹出框展示时页面可以滚动
        } else {
            setAnimatedVisible(false);
            setTimeout(() => {
                setVisible(false);
            }, DURATION * 1000);
            if (blockScroll) document.body.style.overflow = ''; //避免弹出框展示时页面可以滚动
        }
    }, [isOpen]);

    return (
        <ModalContext.Provider value={{ isOpen, onOk, onCancel }}>
            {createPortal(
                <div
                    ref={modalRef}
                    style={{ display: visible ? 'block' : 'none' }}
                >
                    <ModalOverlay
                        onClick={() => onCancel!()}
                        styles={{
                            opacity: animatedVisible ? 1 : 0,
                            transition: `all ${DURATION}s`,
                        }}
                    />
                    <ModalContent
                        styles={{
                            ...style,
                            width: animatedVisible
                                ? ModalContentWidth
                                : AfterModalContentWidth,
                            opacity: animatedVisible ? 1 : 0,
                            top: animatedVisible
                                ? ModalContentTop
                                : AfterModalContentTop,
                            transition: `all ${DURATION}s`,
                        }}
                    >
                        <ModalHeader title={title}></ModalHeader>
                        <ModalBody>{children}</ModalBody>
                        <ModalFooter>{footer}</ModalFooter>
                    </ModalContent>
                </div>,
                document.body
            )}
        </ModalContext.Provider>
    );
};

export default Modal;
