import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import Input from '../components/input/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Input',
    component: Input,
    // componentSubtitle: 'this just is a button to click',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        //     backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    placeholder: 'Primary',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { placeholder: 'ExtraSmall', size: 'xs' };

export const Medium = Template.bind({});
Medium.args = { placeholder: 'Medium', size: 'md' };

export const Large = Template.bind({});
Large.args = { placeholder: 'Large', size: 'lg' };

export const Outline = Template.bind({});
Outline.args = { placeholder: 'Outline', variant: 'outline' };

export const Filled = Template.bind({});
Filled.args = { placeholder: 'Filled', variant: 'filled' };

export const Flushed = Template.bind({});
Flushed.args = { placeholder: 'Flushed', variant: 'flushed' };

export const Unstyle = Template.bind({});
Unstyle.args = { placeholder: 'Unstyle', variant: 'unstyle' };

export const WithVariants = () => (
    <div>
        <Input placeholder={ExtraSmall.args?.placeholder} size="xs" />
        <br />
        <Input placeholder={Primary.args?.placeholder} />
        <br />
        <Input placeholder={Medium.args?.placeholder} size="md" />
        <br />
        <Input placeholder={Large.args?.placeholder} size="lg" />
        <br />
        <Input
            placeholder={Outline.args?.placeholder}
            variant={Outline.args?.variant}
        />
        <br />
        <Input
            placeholder={Filled.args?.placeholder}
            variant={Filled.args?.variant}
        />
        <br />
        <Input
            placeholder={Flushed.args?.placeholder}
            variant={Flushed.args?.variant}
        />
        <br />
        <Input
            placeholder={Unstyle.args?.placeholder}
            variant={Unstyle.args?.variant}
        />
    </div>
);
