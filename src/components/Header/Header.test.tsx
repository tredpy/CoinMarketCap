import { screen } from '@testing-library/react';

import { ComponentRender } from 'tests/ComponentRender/ComponentRender';

import { Header } from './Header';

describe('Header', () => {
    test('Render test', () => {
        ComponentRender(<Header/>);
        expect(screen.getByTestId('Header')).toBeInTheDocument();
    });
});
