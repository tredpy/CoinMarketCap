import { Preview } from '@storybook/react';

import { StyleDecorator } from 'libs/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from 'libs/storybook/RouteDecorator/RouteDecorator';

const preview: Preview = {
    decorators: [
        StyleDecorator,
        RouteDecorator,
        ThemeDecorator('light')
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' }
    }
};

export default preview;
