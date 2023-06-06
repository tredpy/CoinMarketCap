import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/'
    }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Link',
        view: 'primary'
    }
};

export const PrimaryDark: Story = {
    args: {
        children: 'Link',
        view: 'primary'
    },
    decorators: [ThemeDecorator('dark')]
};
