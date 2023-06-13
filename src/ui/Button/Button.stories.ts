import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SizeM: Story = {
    args: {
        children: 'Button',
        size: 'M'
    }
};

export const SizeL: Story = {
    args: {
        children: 'Button',
        size: 'L'
    }
};
export const Disabled: Story = {
    args: {
        children: 'Button',
        disabled: true
    }
};

export const Clear: Story = {
    args: {
        children: 'Button',
        view: 'clear'
    }
};

export const ClearDark: Story = {
    args: {
        children: 'Button',
        view: 'clear'
    },
    decorators: [ThemeDecorator('dark')]
};

export const Border: Story = {
    args: {
        children: 'Button',
        view: 'border'
    }
};

export const BorderDark: Story = {
    args: {
        children: 'Button',
        view: 'border'
    },
    decorators: [ThemeDecorator('dark')]
};

export const Background: Story = {
    args: {
        children: 'Button',
        view: 'background'
    }
};

export const BackgroundDark: Story = {
    args: {
        children: 'Button',
        view: 'background'
    },
    decorators: [ThemeDecorator('dark')]
};
