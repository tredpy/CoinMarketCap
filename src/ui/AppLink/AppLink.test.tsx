import { screen } from '@testing-library/react';

import { AppLink } from './AppLink';

import { ComponentRender } from 'common/tests/ComponentRender/ComponentRender';

describe('AppLink', () => {
    test('Render test', () => {
        ComponentRender(<AppLink to={'/'}>TEST</AppLink>);
        expect(screen.getByTestId('AppLink')).toBeInTheDocument();
    });

    test('With text', () => {
        ComponentRender(<AppLink to={'/'}>TEST</AppLink>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('With view primary', () => {
        ComponentRender(<AppLink to={'/'} view={'primary'}>TEST</AppLink>);
        expect(screen.getByText('TEST')).toHaveClass('primary');
        screen.debug();
    });
});
