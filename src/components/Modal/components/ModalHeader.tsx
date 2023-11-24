import { ReactNode } from 'react';

interface ModalHeaderProps {
    children?: ReactNode;
    title?: string;
}

const ModalHeader = (props: ModalHeaderProps) => {
    const { title, children } = props;

    return <>{children ? children : <h2>{title}</h2>}</>;
};

export default ModalHeader;
