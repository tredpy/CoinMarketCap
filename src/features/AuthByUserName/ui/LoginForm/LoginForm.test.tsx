import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/testsHelpers/componentRender';

import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
    test('Render test', () => {
        componentRender(<LoginForm/>);
        expect(screen.getByTestId('LoginForm')).toBeInTheDocument();
    });
});
