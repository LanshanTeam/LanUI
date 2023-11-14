import { MouseEventHandler } from 'react';
import '../style/modalOverlay.less';

interface IModalOverlayProps {
    onClick?: MouseEventHandler;
    styles?: Record<string | number | symbol, unknown>;
}

const ModalOverlay = ({ onClick, styles }: IModalOverlayProps) => {
    return <div className="mask" style={{ ...styles }} onClick={onClick}></div>;
};

export default ModalOverlay;
