import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/tests/componentRender/componentRender';

import MainPage from './MainPage';

describe('MainPage', () => {
    test('Render test', () => {
        componentRender(<MainPage/>);
        expect(screen.getByTestId('MainPage')).toBeInTheDocument();
    });
});
