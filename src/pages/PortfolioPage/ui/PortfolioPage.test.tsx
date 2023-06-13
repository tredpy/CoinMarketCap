import { screen } from '@testing-library/react';

import { ComponentRender } from 'tests/ComponentRender/ComponentRender';

import PortfolioPage from './PortfolioPage';

describe('PortfolioPage', () => {
    test('Render test', () => {
        ComponentRender(<PortfolioPage/>);
        expect(screen.getByTestId('PortfolioPage')).toBeInTheDocument();
    });
});
