import type { Meta, StoryObj } from '@storybook/react';

import WatchlistPage from './WatchlistPage';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'pages/WatchlistPage',
    component: WatchlistPage,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof WatchlistPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
