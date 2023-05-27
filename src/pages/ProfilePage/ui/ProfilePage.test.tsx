import { screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
    test('Render test', () => {
        renderWithTranslation(<ProfilePage/>);
        expect(screen.getByTestId('ProfilePage')).toBeInTheDocument();
    });
});
