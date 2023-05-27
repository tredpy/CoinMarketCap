import { screen } from '@testing-library/react';
import {
    componentRender
} from 'shared/lib/testsHelpers/componentRender';
import { Header } from './Header';

describe('Header', () => {
    test('Render test', () => {
        componentRender(<Header/>);
        expect(screen.getByTestId('Header')).toBeInTheDocument();
    });
});
