import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'features/Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
