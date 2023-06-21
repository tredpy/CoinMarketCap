import type { Meta, StoryObj } from '@storybook/react';

import CurrencyDetailsPage from './CurrencyDetailsPage';
import { ThemeDecorator } from 'common/libs/Storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'pages/CurrencyDetailsPage',
    component: CurrencyDetailsPage,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof CurrencyDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
