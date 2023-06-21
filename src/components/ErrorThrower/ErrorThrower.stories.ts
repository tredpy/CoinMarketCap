import type { Meta, StoryObj } from '@storybook/react';

import { ErrorThrower } from './ErrorThrower';
import { ThemeDecorator } from 'common/libs/Storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'widget/ErrorThrower',
    component: ErrorThrower,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof ErrorThrower>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
