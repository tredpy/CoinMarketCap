import { Decorator } from '@storybook/react';

import { ThemeProvider } from 'utils/ThemeProvider/ThemeProvider';

import { Theme } from 'utils/ThemeContext/ThemeContext';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>
);
