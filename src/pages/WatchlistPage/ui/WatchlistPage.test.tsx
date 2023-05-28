import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/testsHelpers/componentRender';

import WatchlistPage from './WatchlistPage';

describe('WatchlistPage', () => {
    test('Render test', () => {
        componentRender(<WatchlistPage/>);
        expect(screen.getByTestId('WatchlistPage')).toBeInTheDocument();
    });
});
