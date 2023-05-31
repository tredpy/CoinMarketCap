import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        placeholder: 'Text'
    }
};

export const ClearDark: Story = {
    args: {
        placeholder: 'Text'
    },
    decorators: [ThemeDecorator('dark')]
};
