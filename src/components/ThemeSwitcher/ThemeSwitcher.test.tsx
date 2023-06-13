import { render, screen } from '@testing-library/react';

import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
    test('Render test', () => {
        render(<ThemeSwitcher/>);
        expect(screen.getByTestId('ThemeSwitcher')).toBeInTheDocument();
    });
});
