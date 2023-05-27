import { render, screen } from '@testing-library/react';
import { PageLoader } from './PageLoader';

describe('PageLoader', () => {
    test('Render test', () => {
        render(<PageLoader/>);
        expect(screen.getByTestId('PageLoader')).toBeInTheDocument();
    });
});
