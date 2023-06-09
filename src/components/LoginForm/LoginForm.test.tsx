import { screen } from '@testing-library/react';

import { ComponentRender } from 'common/tests/ComponentRender/ComponentRender';

import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
    test('Render test', () => {
        ComponentRender(<LoginForm/>);
        expect(screen.getByTestId('LoginForm')).toBeInTheDocument();
    });
});
