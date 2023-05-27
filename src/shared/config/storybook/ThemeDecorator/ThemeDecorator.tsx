import { Decorator } from '@storybook/react';
import { Theme } from '../../themeContext/themeContext';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story/>
    </div>
);
