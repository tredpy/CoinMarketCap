import type { Meta, StoryObj } from '@storybook/react';

import { HeaderNotifications } from './HeaderNotifications';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'features/HeaderNotifications',
    component: HeaderNotifications,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof HeaderNotifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
