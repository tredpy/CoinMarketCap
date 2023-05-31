import type { Meta, StoryObj } from '@storybook/react';

import LoginPage from './LoginPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'pages/LoginPage',
    component: LoginPage,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
