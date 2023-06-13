import { screen } from '@testing-library/react';

import { ComponentRender } from 'tests/ComponentRender/ComponentRender';

import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
    test('Render test', () => {
        ComponentRender(<NotFoundPage/>);
        expect(screen.getByTestId('NotFoundPage')).toBeInTheDocument();
    });
});
