import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
