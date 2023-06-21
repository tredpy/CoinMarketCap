import { fireEvent, screen } from '@testing-library/react';

import { ComponentRender } from 'common/tests/ComponentRender/ComponentRender';

import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('Render test', () => {
        ComponentRender(<SideBar/>);
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });

    test('With collapsed class', () => {
        ComponentRender(<SideBar/>);
        const toggleBtn = screen.getByTestId('SideBarCollapseToggle');
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
    });
});
