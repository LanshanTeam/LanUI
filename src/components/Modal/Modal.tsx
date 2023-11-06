import { createContext, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './components/ModalOverlay';
import ModalContent from './components/ModalContent';
import ModalHeader from './components/ModalHeader';
import ModalBody from './components/ModalBody';
import ModalFooter from './components/ModalFooter';
import './style/modal.less';

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
     * @desc 宽度
     */
    width?: string;
    /**
     * @desc 标题
     */
    title?: string;
    /**
     * @desc 页脚内容
     */
    footer?: ReactNode;
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
    isOpen,
    onOk,
    onCancel,
    width = '520px',
    title = 'title',
    footer,
    style,
    children,
}: ModalProps) => {
    return (
        isOpen && (
            <ModalContext.Provider value={{ isOpen, onOk, onCancel }}>
                {createPortal(
                    <>
                        <ModalOverlay onClick={() => onCancel!()} />
                        <ModalContent styles={{ width, ...style }}>
                            <ModalHeader title={title}></ModalHeader>
                            <ModalBody>{children}</ModalBody>
                            <ModalFooter>{footer}</ModalFooter>
                        </ModalContent>
                    </>,
                    document.body
                )}
            </ModalContext.Provider>
        )
    );
};

export default Modal;
