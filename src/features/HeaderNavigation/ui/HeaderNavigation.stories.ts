import type { Meta, StoryObj } from '@storybook/react';

import { HeaderNavigation } from './HeaderNavigation';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'features/HeaderNavigation',
    component: HeaderNavigation,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof HeaderNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
