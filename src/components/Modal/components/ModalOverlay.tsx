import { MouseEventHandler } from 'react';
import '../style/modalOverlay.less';

interface IModalOverlayProps {
    onClick?: MouseEventHandler;
}

const ModalOverlay = ({ onClick }: IModalOverlayProps) => {
    return <div className="mask" onClick={onClick}></div>;
};

export default ModalOverlay;
