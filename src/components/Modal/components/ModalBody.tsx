import { ReactNode } from 'react';

interface ModalBodyProps {
    children?: ReactNode;
}

const ModalBody = (props: ModalBodyProps) => {
    const { children } = props;
    return <>{children}</>;
};

export default ModalBody;
