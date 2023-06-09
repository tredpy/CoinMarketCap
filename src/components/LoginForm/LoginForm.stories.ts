import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'common/libs/Storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'common/libs/Storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof LoginForm>;

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
