import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/tests/componentRender/componentRender';

import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
    test('Render test', () => {
        componentRender(<ProfilePage/>);
        expect(screen.getByTestId('ProfilePage')).toBeInTheDocument();
    });
});
