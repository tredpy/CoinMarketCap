import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'widget/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
