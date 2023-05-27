import { screen } from '@testing-library/react';
import {
    componentRender
} from 'shared/lib/testsHelpers/componentRender';
import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
    test('Render test', () => {
        componentRender(<ProfilePage/>);
        expect(screen.getByTestId('ProfilePage')).toBeInTheDocument();
    });
});
