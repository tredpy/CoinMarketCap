import { render, screen } from '@testing-library/react';

import { CurrencySwitcher } from './CurrencySwitcher';

describe('CurrencySwitcher', () => {
    test('Render test', () => {
        render(<CurrencySwitcher/>);
        expect(screen.getByTestId('CurrencySwitcher')).toBeInTheDocument();
    });
});
