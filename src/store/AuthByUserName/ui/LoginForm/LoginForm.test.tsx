import { screen } from '@testing-library/react';

import { componentRender } from 'tests/componentRender/componentRender';

import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
    test('Render test', () => {
        componentRender(<LoginForm/>);
        expect(screen.getByTestId('LoginForm')).toBeInTheDocument();
    });
});
