import { render, screen } from '@testing-library/react';

import { Input } from './Input';

describe('Input', () => {
    test('Render test', () => {
        render(<Input/>);
        expect(screen.getByTestId('Input')).toBeInTheDocument();
    });
});
