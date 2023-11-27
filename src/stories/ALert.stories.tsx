import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from 'lanblue';

export default {
    title: 'Example/Alert',
    component: Alert,
    argTypes: {},
} as ComponentMeta<typeof Alert>;
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
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
    type: 'danger',
    description: '危险',
};

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    description: '成功',
};
