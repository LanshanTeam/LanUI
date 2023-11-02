import { Button } from 'lanblue';
import { ReactNode, useContext } from 'react';
import { ModalContext } from '../Modal';
import '../style/modalFooter.less';

interface ModalFooterProps {
    children?: ReactNode;
}

const ModalFooter = (props: ModalFooterProps) => {
    const { children } = props;
    const { onOk, onCancel } = useContext(ModalContext);

    const DefaultFooterArea = (
        <div className="btn-area">
            <Button label="Cancel" onClick={() => onCancel!()}></Button>
            <Button
                label="OK"
                onClick={() => onOk!()}
                //@ts-ignore
                style={{ marginLeft: '0.625rem' }}
            ></Button>
        </div>
    );

    return <>{children ? children : DefaultFooterArea}</>;
};

export default ModalFooter;
