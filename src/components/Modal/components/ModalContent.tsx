import { MouseEventHandler, ReactNode, useContext, useEffect } from 'react';
import { ModalContext } from '../Modal';
import '../style/modalContent.less';

interface ModalContentProps {
    children?: ReactNode;
    styles?: Record<string, string>;
}

const ModalContent = (props: ModalContentProps) => {
    const { styles, children } = props;
    const { onCancel } = useContext(ModalContext);

    return (
        <div className="modal-content" style={{ ...styles }}>
            <span className="i_modal_close" onClick={() => onCancel!()}>
                X
            </span>
            {children}
        </div>
    );
};

export default ModalContent;
