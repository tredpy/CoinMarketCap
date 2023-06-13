import { screen } from '@testing-library/react';

import { ComponentRender } from 'tests/ComponentRender/ComponentRender';

import MainPage from './MainPage';

describe('MainPage', () => {
    test('Render test', () => {
        ComponentRender(<MainPage/>);
        expect(screen.getByTestId('MainPage')).toBeInTheDocument();
    });
});
