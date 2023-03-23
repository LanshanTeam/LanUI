import { FC } from 'react';
export type AlertType = 'primary' | 'info' | 'success' | 'warning' | 'danger';
export interface BaseAlertProps {
    type?: AlertType;
    className?: string;
    description?: React.ReactNode;
}
declare const Alert: FC<BaseAlertProps>;
export default Alert;
