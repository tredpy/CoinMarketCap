import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        text: 'Text'
    }
};

export const ClearDark: Story = {
    args: {
        text: 'Text'
    },
    decorators: [ThemeDecorator('dark')]
};
