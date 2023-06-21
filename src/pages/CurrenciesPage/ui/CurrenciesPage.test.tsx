import { screen } from '@testing-library/react';

import { ComponentRender } from 'tests/ComponentRender/ComponentRender';

import CurrenciesPage from './CurrenciesPage';

describe('CurrenciesPage', () => {
    test('Render test', () => {
        ComponentRender(<CurrenciesPage/>);
        expect(screen.getByTestId('CurrenciesPage')).toBeInTheDocument();
    });
});
