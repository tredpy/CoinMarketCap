import type { Meta, StoryObj } from '@storybook/react';

import { HeaderLogo } from './HeaderLogo';

import { ThemeDecorator } from 'libs/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'features/HeaderLogo',
    component: HeaderLogo,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof HeaderLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {}
};

export const ClearDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')]
};
