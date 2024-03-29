import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import UpLoader from '../components/upLoader/index';

export default {
    title: 'Example/UpLoader',
    component: UpLoader,
    // componentSubtitle: 'this just is a button to click',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        //     backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UpLoader>;

const Template: ComponentStory<typeof UpLoader> = (args) => (
    <div style={{ display: 'flex', height: '25rem', width: '25rem' }}>
        <UpLoader />
    </div>
);

export const Primary = Template.bind({});
