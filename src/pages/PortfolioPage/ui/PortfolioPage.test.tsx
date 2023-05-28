import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/testsHelpers/componentRender';

import PortfolioPage from './PortfolioPage';

describe('PortfolioPage', () => {
    test('Render test', () => {
        componentRender(<PortfolioPage/>);
        expect(screen.getByTestId('PortfolioPage')).toBeInTheDocument();
    });
});
