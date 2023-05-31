import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/testsHelpers/componentRender';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
    test('Render test', () => {
        componentRender(<LoginPage/>);
        expect(screen.getByTestId('LoginPage')).toBeInTheDocument();
    });
});
