import { screen } from '@testing-library/react';

import { ComponentRender } from 'tests/ComponentRender/ComponentRender';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
    test('Render test', () => {
        ComponentRender(<LoginPage/>);
        expect(screen.getByTestId('LoginPage')).toBeInTheDocument();
    });
});
