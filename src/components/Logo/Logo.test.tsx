import { screen } from '@testing-library/react';

import { ComponentRender } from 'common/tests/ComponentRender/ComponentRender';

import { Logo } from './Logo';

describe('Logo', () => {
    test('Render test', () => {
        ComponentRender(<Logo/>);
        expect(screen.getByTestId('Logo')).toBeInTheDocument();
    });
});
