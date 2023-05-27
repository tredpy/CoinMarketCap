import { screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { LangSwitcher } from './LangSwitcher';

describe('LangSwitcher', () => {
    test('Render test', () => {
        renderWithTranslation(<LangSwitcher/>);
        expect(screen.getByTestId('LangSwitcher')).toBeInTheDocument();
    });
});
