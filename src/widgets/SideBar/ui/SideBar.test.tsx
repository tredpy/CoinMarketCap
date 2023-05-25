import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('Render test', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });

    test('With collapsed class', () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('SideBarCollapseToggle');
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
    });
});
