import { Decorator } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';

import { Theme } from '../../themeContext/themeContext';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>
);
