import type { Preview } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator('light'), RouterDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' }
    }
};

export default preview;
