import React, { useState } from 'react';
import { type ComponentMeta } from '@storybook/react';

import Modal from '../components/Modal/index';
import { Button } from 'lanblue';

export default {
    title: 'Example/Modal',
    component: Modal,
    argTypes: {},
} as ComponentMeta<typeof Modal>;

export const Primary = () => {
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
            <Modal isOpen={isOpen} onOk={onOk} onCancel={onCancel}>
                <p>Content 1</p>
                <p>Content 2</p>
                <p>Content 3</p>
            </Modal>
        </>
    );
};

export const Custom = () => {
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
                style={{ top: '35%' }}
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

export const BlockScrolling = () => {
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
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <Modal
                isOpen={isOpen}
                blockScroll={false}
                onOk={onOk}
                onCancel={onCancel}
            >
                <p>Content 1</p>
                <p>Content 2</p>
                <p>Content 3</p>
            </Modal>
        </>
    );
};

export const CloseModalonOverlayClick = () => {
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
                closeOnOverlayClick={false}
                onOk={onOk}
                onCancel={onCancel}
            >
                <p>Content 1</p>
                <p>Content 2</p>
                <p>Content 3</p>
            </Modal>
        </>
    );
};
