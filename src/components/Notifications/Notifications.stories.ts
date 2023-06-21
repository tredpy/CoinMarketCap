import type { Meta, StoryObj } from '@storybook/react';

import { Notifications } from './Notifications';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'features/Notifications',
    component: Notifications,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
