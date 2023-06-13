import { screen } from '@testing-library/react';

import { componentRender } from 'tests/componentRender/componentRender';

import WatchlistPage from './WatchlistPage';

describe('WatchlistPage', () => {
    test('Render test', () => {
        componentRender(<WatchlistPage/>);
        expect(screen.getByTestId('WatchlistPage')).toBeInTheDocument();
    });
});
