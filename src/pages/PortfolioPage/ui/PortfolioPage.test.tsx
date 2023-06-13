import { screen } from '@testing-library/react';

import { componentRender } from 'tests/componentRender/componentRender';

import PortfolioPage from './PortfolioPage';

describe('PortfolioPage', () => {
    test('Render test', () => {
        componentRender(<PortfolioPage/>);
        expect(screen.getByTestId('PortfolioPage')).toBeInTheDocument();
    });
});
