import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/tests/componentRender/componentRender';

import { Header } from './Header';

describe('Header', () => {
    test('Render test', () => {
        componentRender(<Header/>);
        expect(screen.getByTestId('Header')).toBeInTheDocument();
    });
});
