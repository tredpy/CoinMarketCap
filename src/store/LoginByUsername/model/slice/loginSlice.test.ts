import { Login } from '../types/login';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('Should Equal Set Username', () => {
        const state: DeepPartial<Login> = { username: 'admin' };
        expect(loginReducer(
            state as Login,
            loginActions.setUsername('user')
        )).toEqual({ username: 'user' });
    });

    test('Should Equal Set Password', () => {
        const state: DeepPartial<Login> = { password: 'admin' };
        expect(loginReducer(
            state as Login,
            loginActions.setPassword('pass')
        )).toEqual({ password: 'pass' });
    });
});
