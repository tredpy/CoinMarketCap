import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from './SideBar';
import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'widget/SideBar',
    component: SideBar,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};