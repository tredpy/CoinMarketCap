import type { Meta, StoryObj } from '@storybook/react';

import { HeaderNotification } from './HeaderNotification';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'features/HeaderNotification',
    component: HeaderNotification,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof HeaderNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
