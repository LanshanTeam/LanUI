import { FC } from 'react';
export type AlertType = 'primary' | 'info' | 'success' | 'warning' | 'danger';
export interface BaseAlertProps {
    type?: AlertType;
    className?: string;
    description?: string;
}
declare const Alert: FC<BaseAlertProps>;
export default Alert;
