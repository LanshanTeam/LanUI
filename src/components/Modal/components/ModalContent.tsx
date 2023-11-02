import { MouseEventHandler, ReactNode, useContext } from 'react';
import { ModalContext } from '../Modal';
import '../style/modalContent.less';

interface ModalContentProps {
    children?: ReactNode;
}

const ModalContent = (props: ModalContentProps) => {
    const { children } = props;
    const { onCancel } = useContext(ModalContext);

    return (
        <div className="modal-content">
            <span className="i_modal_close" onClick={() => onCancel!()}>
                X
            </span>
            {children}
        </div>
    );
};

export default ModalContent;
