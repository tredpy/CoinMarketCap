import { fireEvent, screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/testsHelpers/componentRender';

import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('Render test', () => {
        componentRender(<SideBar/>);
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });

    test('With collapsed class', () => {
        componentRender(<SideBar/>);
        const toggleBtn = screen.getByTestId('SideBarCollapseToggle');
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
    });
});
