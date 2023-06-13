import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'libs/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'widget/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {},
    decorators: [StoreDecorator({})]
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark'), StoreDecorator({})]
};

export const WithAuth: Story = {
    args: {},
    decorators: [StoreDecorator({ user: { authData: {} } })]
};

export const WithAuthDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark'), StoreDecorator({ user: { authData: {} } })]
};
