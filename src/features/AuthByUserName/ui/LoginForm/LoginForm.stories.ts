import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

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
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
