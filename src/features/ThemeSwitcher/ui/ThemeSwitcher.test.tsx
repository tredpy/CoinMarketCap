import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/testsHelpers/componentRender';

import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
    test('Render test', () => {
        componentRender(<ThemeSwitcher/>);
        expect(screen.getByTestId('ThemeSwitcher')).toBeInTheDocument();
    });
});
