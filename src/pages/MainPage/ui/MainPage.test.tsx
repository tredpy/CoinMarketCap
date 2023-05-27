import { screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import MainPage from './MainPage';

describe('MainPage', () => {
    test('Render test', () => {
        renderWithTranslation(<MainPage/>);
        expect(screen.getByTestId('MainPage')).toBeInTheDocument();
    });
});
