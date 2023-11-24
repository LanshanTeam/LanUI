import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Button } from 'lanblue';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const WithVariants = () => (
    <div>
        <Button size="large" label="Button"></Button>
        <Button size="small" label="Button"></Button>
        <Button size="large" label="Button"></Button>
        <Button size="large" label="Button"></Button>
        <Button size="large" label="Button"></Button>
    </div>
);
