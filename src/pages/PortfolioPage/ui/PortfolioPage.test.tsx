import { screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import PortfolioPage from './PortfolioPage';

describe('PortfolioPage', () => {
    test('Render test', () => {
        renderWithTranslation(<PortfolioPage/>);
        expect(screen.getByTestId('PortfolioPage')).toBeInTheDocument();
    });
});
