import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import Task from '../components/task/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Task',
    component: Task,
    // componentSubtitle: 'this just is a button to click',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        //     backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    task: { id: '1', title: 'TestTask', state: 'TASK_INBOX' },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...{ id: '1', title: 'TestPinned' },
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...{ id: '1', title: 'TestArchived' },
        state: 'TASK_ARCHIVED',
    },
};

export const WithVariants = () => (
    <div>
        <Task
            task={
                Primary.args?.task || { id: '1', title: 'TestTask', state: '' }
            }
        ></Task>
    </div>
);
