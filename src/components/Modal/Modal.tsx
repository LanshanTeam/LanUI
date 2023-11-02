import { createContext, SetStateAction, useEffect, useState } from 'react';
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
}: ModalProps) => {
    const close = () => {
        onCancel!();
    };

    return (
        isOpen && (
            <ModalContext.Provider value={{ isOpen, onOk, onCancel }}>
                {createPortal(
                    <>
                        <ModalOverlay onClick={close} />
                        <ModalContent styles={{ width }}>
                            <ModalHeader title={title}></ModalHeader>
                            <ModalBody>
                                <p>Content 1</p>
                                <p>Content 2</p>
                                <p>Content 3</p>
                            </ModalBody>
                            <ModalFooter></ModalFooter>
                        </ModalContent>
                    </>,
                    document.body
                )}
            </ModalContext.Provider>
        )
    );
};

export default Modal;
