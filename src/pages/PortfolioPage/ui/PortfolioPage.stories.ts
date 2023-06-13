import type { Meta, StoryObj } from '@storybook/react';

import PortfolioPage from './PortfolioPage';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'pages/PortfolioPage',
    component: PortfolioPage,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof PortfolioPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
