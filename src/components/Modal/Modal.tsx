import { createContext, SetStateAction, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './components/ModalOverlay';
import ModalContent from './components/ModalContent';
import ModalHeader from './components/ModalHeader';
import ModalBody from './components/ModalBody';
import ModalFooter from './components/ModalFooter';
import Button from '../button';
import './style/modal.less';

enum Size {
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'full',
}

export interface ModalProps {
    isOpen: Boolean;
    onOk?: Function;
    onCancel?: Function;
    size?: string;
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
    size,
    title = '内容',
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
                        <ModalContent>
                            <ModalHeader />
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
