import { useEffect, useState } from 'react';

export interface InputProps {
    placeholder?: string;

    height?: number; //宽度
    width?: number; //长度
    variant?: string; //样式

    size?: string; //样式大小
}

const Input = ({
    placeholder,
    width = 360,
    height = 18,
    variant = 'outline',
    ...props
}: InputProps) => {
    const [style, setStyle] = useState<string>(`onBlur ${variant}`);

    //默认值
    const cssStyle = {
        fontSize: 1,
        textIndent: 0.5,
    };

    //根据传入的size判断返回大小
    if (props.size) {
        switch (props.size) {
            case 'xs':
                height = 12;
                cssStyle.fontSize = 0.6;
                cssStyle.textIndent = 0.3;
                break;
            case 'sm':
                height = 18;
                cssStyle.fontSize = 1;
                cssStyle.textIndent = 0.5;
                break;
            case 'md':
                height = 24;
                cssStyle.fontSize = 1.1;
                cssStyle.textIndent = 0.6;
                break;
            case 'lg':
                height = 30;
                cssStyle.fontSize = 1.3;
                cssStyle.textIndent = 0.7;
                break;
        }
    }

    //聚焦样式
    const onFocus = () => {
        setStyle(`${variant}-focus`);
    };
    //非聚焦样式
    const onBlur = () => {
        setStyle(`${variant}`);
    };

    return (
        <div className="lanui-input" onFocus={onFocus} onBlur={onBlur}>
            <input
                type="text"
                className={style}
                placeholder={placeholder}
                readOnly={false}
                style={{
                    height: `${height}px`,
                    width: `${width}px`,
                    fontSize: `${cssStyle.fontSize}rem`,
                    textIndent: `${cssStyle.textIndent}rem`,
                }}
            />
        </div>
    );
};

export default Input;
