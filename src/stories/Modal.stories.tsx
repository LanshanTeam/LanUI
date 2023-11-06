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
    title: 'title',
    children: 'Content',
};

export const openModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOk = () => {
        setIsOpen(false);
        console.log('执行onOk');
    };

    const onCancel = () => {
        setIsOpen(false);
        console.log('执行onCancel');
    };

    return (
        <>
            <Button label="点击弹出框" onClick={() => setIsOpen(true)}></Button>
            <Modal
                isOpen={isOpen}
                title="标题"
                width="600px"
                style={{ top: '160px' }}
                onOk={onOk}
                onCancel={onCancel}
                footer={<button onClick={onOk}>自定义确认</button>}
            >
                <p>Content 1</p>
                <p>Content 2</p>
                <p>Content 3</p>
            </Modal>
        </>
    );
};
