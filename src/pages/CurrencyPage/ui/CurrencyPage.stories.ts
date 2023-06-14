import type { Meta, StoryObj } from '@storybook/react';

import CurrencyPage from './CurrencyPage';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'pages/CurrencyPage',
    component: CurrencyPage,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof CurrencyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
