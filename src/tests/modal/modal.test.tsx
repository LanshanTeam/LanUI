import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import Modal from '../../components/Modal/index';

jest.useFakeTimers();

describe('Modal Component', () => {
    it('should renders closed Modal by default', () => {
        render(
            <Modal isOpen={false} onOk={() => {}} onCancel={() => {}}>
                Test Content
            </Modal>
        );
        expect(screen.queryByText('Test Content')).toBeNull();
    });

    it('should render correctly', () => {
        render(
            <Modal isOpen={true} onOk={() => {}} onCancel={() => {}}>
                Test Content
            </Modal>
        );
        expect(screen.queryByText('Test Content')).toMatchSnapshot();
    });

    it('should renders Modal with custom footer', () => {
        render(
            <Modal
                isOpen={true}
                onOk={() => {}}
                onCancel={() => {}}
                footer={<button onClick={() => {}}>自定义确认</button>}
            >
                Test Content
            </Modal>
        );

        expect(screen.queryByText('Test Content')).toBeInTheDocument();
    });

    it('calls onOk callback when Ok button is clicked', () => {
        const onOkMock = jest.fn();
        render(
            <Modal isOpen={true} onOk={onOkMock} onCancel={() => {}}>
                Test Content
            </Modal>
        );
        fireEvent.click(screen.getByText('OK'));
        act(() => {
            jest.runAllTimers();
        });
        expect(onOkMock).toHaveBeenCalled();
    });

    it('calls onCancel callback when Cancel button is clicked', () => {
        const onCancelMock = jest.fn();
        render(
            <Modal isOpen={true} onOk={() => {}} onCancel={onCancelMock}>
                Test Content
            </Modal>
        );
        fireEvent.click(screen.getByText('Cancel'));
        act(() => {
            jest.runAllTimers();
        });
        expect(onCancelMock).toHaveBeenCalled();
    });
});
