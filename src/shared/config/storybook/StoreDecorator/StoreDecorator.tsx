import { Decorator } from '@storybook/react';

import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (Story) => (
    // @ts-ignore
    <StoreProvider initialState={state}>
        <Story/>
    </StoreProvider>
);
