import { screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import WatchlistPage from './WatchlistPage';

describe('WatchlistPage', () => {
    test('Render test', () => {
        renderWithTranslation(<WatchlistPage/>);
        expect(screen.getByTestId('WatchlistPage')).toBeInTheDocument();
    });
});
