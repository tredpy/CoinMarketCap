import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/tests/componentRender/componentRender';

import PortfolioPage from './PortfolioPage';

describe('PortfolioPage', () => {
    test('Render test', () => {
        componentRender(<PortfolioPage/>);
        expect(screen.getByTestId('PortfolioPage')).toBeInTheDocument();
    });
});
