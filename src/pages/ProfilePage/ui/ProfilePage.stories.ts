import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'common/libs/Storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'common/libs/Storybook/StoreDecorator/StoreDecorator';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {},
    decorators: [StoreDecorator({})]
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark'), StoreDecorator({})]
};
