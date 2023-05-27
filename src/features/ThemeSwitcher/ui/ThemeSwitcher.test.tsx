import { screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
    test('Render test', () => {
        renderWithTranslation(<ThemeSwitcher/>);
        expect(screen.getByTestId('ThemeSwitcher')).toBeInTheDocument();
    });
});
