import { Preview } from '@storybook/react';

import { StyleDecorator } from 'common/libs/Storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'common/libs/Storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from 'common/libs/Storybook/RouteDecorator/RouteDecorator';

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
