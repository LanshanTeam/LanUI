import React from 'react';
import { render } from '@testing-library/react';
import Skeleton from '../../components/Skeleton/index';
import { SkeletonProps } from '@/components/Skeleton/Skeleton';

const genSkeleton = (props: SkeletonProps) =>
    render(
        <div data-testid="skeleton">
            <Skeleton {...props} />
        </div>
    );

describe('Skeleton Component', () => {
    it('should render with custom height correctly', () => {
        const { getByTestId } = genSkeleton({ loading: true, height: '20px' });
        expect(getByTestId('skeleton')).toMatchSnapshot();
    });

    it('should render animated skeleton correctly', () => {
        const { getByTestId } = genSkeleton({ loading: true, active: true });
        expect(getByTestId('skeleton')).toMatchSnapshot();
    });

    it('should render with rows correctly', () => {
        const { getByTestId } = genSkeleton({ loading: true, rows: 2 });
        expect(getByTestId('skeleton')).toMatchSnapshot();
    });

    it('should render circle skeleton correctly', () => {
        const { getByTestId } = genSkeleton({ loading: true, circle: true });
        expect(getByTestId('skeleton')).toMatchSnapshot();
    });

    it('should render with adaptive height correctly', () => {
        const { getByTestId } = render(
            <div data-testid="skeleton">
                <Skeleton loading={true}>
                    <div>CodingStartup</div>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex quasienim facere commodi omnis. . .
                    </div>
                </Skeleton>
            </div>
        );
        expect(getByTestId('skeleton')).toMatchSnapshot();
    });
});
