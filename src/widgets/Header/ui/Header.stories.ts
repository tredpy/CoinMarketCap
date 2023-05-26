import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'widget/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
