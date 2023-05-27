import type { Preview } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator';

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator('light'), RouteDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' }
    }
};

export default preview;
