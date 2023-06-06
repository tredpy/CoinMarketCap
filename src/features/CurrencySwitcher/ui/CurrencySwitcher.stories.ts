import type { Meta, StoryObj } from '@storybook/react';

import { CurrencySwitcher } from './CurrencySwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'features/CurrencySwitcher',
    component: CurrencySwitcher,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof CurrencySwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
