import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        isOpen: true,
        children: 'Modal Modal Modal Modal Modal Modal Modal Modal '
    }
};

export const ClearDark: Story = {
    args: {
        isOpen: true,
        children: 'Modal Modal Modal Modal Modal Modal Modal Modal '
    },
    decorators: [ThemeDecorator('dark')]
};
