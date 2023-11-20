import { ReactNode, useEffect } from 'react';
import './style/skeleton.less';

export interface SkeletonProps {
    loading: Boolean;
    height?: string;
    size?: number;
    circle?: Boolean;
    children?: ReactNode;
}

const Skeleton = (props: SkeletonProps) => {
    const { loading, height = '30px', circle, size = 6, children } = props;

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
        <div
            className="loading"
            style={{
                width: circle ? 5 * size + 'px' : '100%',
                height: circle ? 5 * size + 'px' : height,
                borderRadius: circle ? '50%' : 0,
            }}
        ></div>
    ) : (
        <>{children}</>
    );
};

export default Skeleton;
