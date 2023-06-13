import { screen } from '@testing-library/react';

import { ComponentRender } from 'tests/ComponentRender/ComponentRender';

import { HeaderLogo } from './HeaderLogo';

describe('HeaderLogo', () => {
    test('Render test', () => {
        ComponentRender(<HeaderLogo/>);
        expect(screen.getByTestId('HeaderLogo')).toBeInTheDocument();
    });
});
