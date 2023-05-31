import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
