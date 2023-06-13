import { screen } from '@testing-library/react';

import { ComponentRender } from 'tests/ComponentRender/ComponentRender';

import { ErrorThrower } from './ErrorThrower';

describe('ErrorThrower', () => {
    test('Render test', () => {
        ComponentRender(<ErrorThrower/>);
        expect(screen.getByTestId('ErrorThrower')).toBeInTheDocument();
    });
});
