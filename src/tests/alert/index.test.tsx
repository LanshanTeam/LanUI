import { render } from '@testing-library/react';
import Alert from '../../components/alert/index';

describe('Alert', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(
            <div data-testid="alert">
                <Alert description="default"></Alert>
                <Alert type="primary"></Alert>
                <Alert type="info"></Alert>
                <Alert type="warning"></Alert>
                <Alert type="danger"></Alert>
            </div>
        );
        expect(getByTestId('alert')).toMatchSnapshot();
    });
});
