import type { Meta, StoryObj } from '@storybook/react';

import LoginPage from './LoginPage';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'libs/storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'pages/LoginPage',
    component: LoginPage,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {},
    decorators: [StoreDecorator({ loginForm: { username: 'admin', password: 'admin' } })]
};

export const ClearDark: Story = {
    args: {},
    decorators: [
        StoreDecorator({ loginForm: { username: 'admin', password: 'admin' } }),
        ThemeDecorator('dark')
    ]
};

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({ loginForm: { username: 'admin', password: 'admin', error: 'ERROR' } })
    ]
};

export const WithErrorDark: Story = {
    args: {},
    decorators: [
        StoreDecorator({ loginForm: { username: 'admin', password: 'admin', error: 'ERROR' } }),
        ThemeDecorator('dark')
    ]
};

export const WithLoading: Story = {
    args: {},
    decorators: [
        StoreDecorator({ loginForm: { username: 'admin', password: 'admin', isLoading: true } })
    ]
};
export const WithLoadingDark: Story = {
    args: {},
    decorators: [
        StoreDecorator({ loginForm: { username: 'admin', password: 'admin', isLoading: true } }),
        ThemeDecorator('dark')
    ]
};
