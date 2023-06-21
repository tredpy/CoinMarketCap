import { screen } from '@testing-library/react';

import { ComponentRender } from 'common/tests/ComponentRender/ComponentRender';

import WatchlistPage from './WatchlistPage';

describe('WatchlistPage', () => {
    test('Render test', () => {
        ComponentRender(<WatchlistPage/>);
        expect(screen.getByTestId('WatchlistPage')).toBeInTheDocument();
    });
});
