import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import VirtualList from '../components/virtualList/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/VirtualList',
    component: VirtualList,
    // componentSubtitle: 'this just is a button to click',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        //     backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof VirtualList>;
let data: Array<any> = [];
for (let id = 0; id < 1000; id++) {
    data.push({
        id,
        value: '你好', // 长文本
    });
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VirtualList> = (args) => (
    <VirtualList {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    data: data,
};

export const WithVariants = () => (
    <div>
        <VirtualList data={data}></VirtualList>
    </div>
);
