import { Button } from 'lanblue';
import { ReactNode, useContext } from 'react';
import { ModalContext } from '../Modal';
import '../style/ModalFooter.less';

interface ModalFooterProps {
    children?: ReactNode;
}

const ModalFooter = (props: ModalFooterProps) => {
    const { children } = props;
    const { onOk, onCancel } = useContext(ModalContext);

    const DefaultFooterArea = (
        <>
            <Button // @ts-ignore
                style={{ marginLeft: '22rem' }}
                label="Cancel"
                onClick={() => onCancel!()}
            ></Button>
            <Button // @ts-ignore
                style={{ marginLeft: '1.2rem' }}
                label="OK"
                onClick={() => onOk!()}
            ></Button>
        </>
    );

    return <>{children ? children : DefaultFooterArea}</>;
};

export default ModalFooter;
