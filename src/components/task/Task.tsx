import { useState } from 'react';

export interface TaskProps {
    task: {
        id: string;
        title: string;
        state: string;
    };
    onArchiveTask?: Function;
    onPinTask?: Function;
}

const Task = ({ task, ...props }: TaskProps) => {
    const [style, setStyle] = useState<string>('onBlur');

    const onFocus = () => {
        setStyle('onFocus');
    };
    const onBlur = () => {
        setStyle('onBlur');
    };

    return (
        <div className="lanui-task" onFocus={onFocus} onBlur={onBlur}>
            <input
                type="text"
                className={style}
                placeholder={task.title}
                readOnly={false}
            />
        </div>
    );
};

export default Task;
