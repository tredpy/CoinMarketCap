import type { Meta, StoryObj } from '@storybook/react';

import CurrenciesPage from './CurrenciesPage';
import { ThemeDecorator } from 'common/libs/Storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'pages/CurrenciesPage',
    component: CurrenciesPage,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof CurrenciesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
