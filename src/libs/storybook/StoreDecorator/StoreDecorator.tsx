import { Decorator } from '@storybook/react';

import { StateSchema, StoreProvider } from 'store/StoreProvider';
import { loginReducer } from 'store/AuthByUserName';
import { profileReducer } from 'store/Profile';

import { ReducersList } from 'utils/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>, asyncReducers?: ReducersList
): Decorator => (Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story/>
    </StoreProvider>
);
