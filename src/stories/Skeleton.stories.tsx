import React, { useState } from 'react';
import { type ComponentMeta } from '@storybook/react';

import Skeleton from '../components/Skeleton/index';
import { Button } from 'lanblue';

export default {
    title: 'Example/Skeleton',
    component: Skeleton,
    argTypes: {},
} as ComponentMeta<typeof Skeleton>;

export const Primary = () => {
    return (
        <>
            <Skeleton loading={true} height="20px"></Skeleton>
        </>
    );
};

export const Animated = () => {
    return (
        <>
            <Skeleton loading={true} active height="20px"></Skeleton>
        </>
    );
};

export const Rows = () => {
    return (
        <>
            <Skeleton loading={true} rows={3} active height="20px"></Skeleton>
        </>
    );
};

export const Circle = () => {
    return (
        <>
            <Skeleton loading={true} circle={true} size={10} active></Skeleton>
        </>
    );
};

export const Adapt = () => {
    const [loading, setLoading] = useState(false);
    const toggle = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    return (
        <>
            <Button label="toggle" onClick={toggle}></Button>
            <Skeleton loading={loading} active style={{ marginTop: 10 + 'px' }}>
                <div>CodingStartup</div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                    quasienim facere commodi omnis. . .
                </div>
            </Skeleton>
        </>
    );
};
