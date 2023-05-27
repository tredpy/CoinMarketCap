import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
    test('Render test', () => {
        render(<Loader/>);
        expect(screen.getByTestId('Loader')).toBeInTheDocument();
    });
});
