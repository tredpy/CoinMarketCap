import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from '../types/loginSchema';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('Should Equal Set Username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('user')
        )).toEqual({ username: 'user' });
    });

    test('Should Equal Set Password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'admin' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('pass')
        )).toEqual({ password: 'pass' });
    });
});
