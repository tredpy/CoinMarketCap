import { screen } from '@testing-library/react';

import { ComponentRender } from 'common/tests/ComponentRender/ComponentRender';

import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
    test('Render test', () => {
        ComponentRender(<ProfilePage/>);
        expect(screen.getByTestId('ProfilePage')).toBeInTheDocument();
    });
});
