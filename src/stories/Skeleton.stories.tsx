import React from 'react';
import { type ComponentMeta } from '@storybook/react';

import Skeleton from '../components/Skeleton/index';

export default {
    title: 'Example/Skeleton',
    component: Skeleton,
    argTypes: {},
} as ComponentMeta<typeof Skeleton>;

export const primary = () => {
    return (
        <Skeleton>
            <h4>CodingStartup</h4>
            <div className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                quasienim facere commodi omnis. . .
            </div>
        </Skeleton>
    );
};
