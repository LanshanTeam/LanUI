import { CSSProperties, forwardRef, ReactNode, useEffect } from 'react';
import './style/skeleton.less';

export interface SkeletonProps {
    /**
     * @desc 是否加载
     */
    loading: Boolean;
    /**
     * @desc 是否显示动画
     */
    active?: Boolean;
    /**
     * @desc 高度
     */
    height?: string;
    /**
     * @desc 行数
     */
    rows?: number;
    /**
     * @desc 圆形大小
     */
    size?: number;
    /**
     * @desc 是否为圆形
     */
    circle?: Boolean;
    /**
     * @desc 用户自定义样式
     */
    style?: CSSProperties;
    /**
     * @desc 主体内容
     */
    children?: Array<ReactNode>;
}

const Skeleton = forwardRef<any, SkeletonProps>((props, ref): any => {
    const {
        loading,
        active,
        height = '30px',
        rows,
        circle,
        size = 6,
        style,
        children,
    } = props;

    useEffect(() => {
        validateSkeletonProps(props);
    }, []);

    const validateSkeletonProps = (props: SkeletonProps): void => {
        if (props.size !== undefined && props.circle === undefined) {
            throw new Error(
                'If size is provided, circle must also be provided.'
            );
        }
    };

    return loading ? (
        Array(rows)
            .fill(0)
            .map((_, index) => {
                return (
                    <div
                        key={index}
                        ref={ref}
                        className={`loading ${active ? 'active' : ''}`}
                        style={{
                            width: circle ? 5 * size + 'px' : '100%',
                            height: circle
                                ? 5 * size + 'px'
                                : children && children.length
                                ? 30 * children.length + 'px'
                                : height,
                            borderRadius: circle ? '50%' : 0,
                            ...style,
                        }}
                    ></div>
                );
            })
    ) : (
        <div style={{ ...style }}>{children}</div>
    );
});
export default Skeleton;
