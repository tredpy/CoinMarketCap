import { screen } from '@testing-library/react';

import { ComponentRender } from 'tests/ComponentRender/ComponentRender';

import CurrencyPage from './CurrencyPage';

describe('CurrencyPage', () => {
    test('Render test', () => {
        ComponentRender(<CurrencyPage/>);
        expect(screen.getByTestId('CurrencyPage')).toBeInTheDocument();
    });
});
