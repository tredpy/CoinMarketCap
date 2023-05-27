import { screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
    test('Render test', () => {
        renderWithTranslation(<NotFoundPage/>);
        expect(screen.getByTestId('NotFoundPage')).toBeInTheDocument();
    });
});
