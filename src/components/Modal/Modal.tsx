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
    size?: string;
    title?: string;
}

export interface ModalContext extends Partial<ModalProps> {
    setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

export const ModalContext = createContext<ModalContext>({
    setIsOpen: function (value: SetStateAction<Boolean>): void {
        throw new Error('Function setIsOpen not implemented.');
    },
});

const Modal = ({ isOpen, size, title = '内容' }: ModalProps) => {
    const [_isOpen, setIsOpen] = useState(isOpen);

    useEffect(() => {
        setIsOpen(isOpen);
    }, [isOpen]);

    const close = () => {
        setIsOpen(false);
    };

    return _isOpen ? (
        <ModalContext.Provider value={{ setIsOpen }}>
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
    ) : null;
};

export default Modal;
