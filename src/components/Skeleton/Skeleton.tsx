import { ReactNode, useEffect } from 'react';
import './style/skeleton.less';

export interface SkeletonProps {
    children: ReactNode;
}

const Skeleton = (props: SkeletonProps) => {
    const { children } = props;

    useEffect(() => {
        console.log(children);
    });

    return <div className="loading"></div>;
};

export default Skeleton;
