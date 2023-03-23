import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from '../components/alert/index';

export default {
    title: 'Example/Alert',
    component: Alert,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Alert>;
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    type: 'primary',
    description: '主要的',
};

export const Info = Template.bind({});
Info.args = {
    type: 'info',
    description: '主要',
};

export const Danger = Template.bind({});
Danger.args = {
    // size: 'large',
    // label: '',
    type: 'danger',
    description: '危险',
};

export const Success = Template.bind({});
Success.args = {
    // size: 'small',
    // label: 'Button',
    type: 'success',
    description: '成功',
};
