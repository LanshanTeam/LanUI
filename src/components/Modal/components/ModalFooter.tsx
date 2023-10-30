import { Button } from 'lanblue';
import { ReactNode } from 'react';
import '../style/ModalFooter.less';

interface ModalFooterProps {
    children?: ReactNode;
}

const ModalFooter = (props: ModalFooterProps) => {
    const { children } = props;

    return <>{children ? children : <Button label="Close"></Button>}</>;
};

export default ModalFooter;
