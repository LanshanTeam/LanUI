import React, { useState } from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import Modal from '../components/Modal/index';
import { Button } from 'lanblue';

export default {
    title: 'Example/Modal',
    component: Modal,
    argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    title: 'Modal好好好',
};

export const openModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button label="点击弹出框" onClick={() => setIsOpen(true)}></Button>
            <Modal isOpen={isOpen}></Modal>
        </>
    );
};
