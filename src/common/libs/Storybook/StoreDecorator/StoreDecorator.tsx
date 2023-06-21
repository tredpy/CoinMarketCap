import { Decorator } from '@storybook/react';

import { StateSchema } from 'store/Store';
import { loginReducer } from 'store/LoginByUsername';
import { profileReducer } from 'store/Profile';

import { ReducersList } from '../../../utils/DynamicModuleLoader/DynamicModuleLoader';
import { StoreProvider } from '../../../utils/StoreProvider/StoreProvider';

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
