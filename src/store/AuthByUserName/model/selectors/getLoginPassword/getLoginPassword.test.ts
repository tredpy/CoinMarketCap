import { StateSchema } from '../../../../StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('Should Return Value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'admin'
            }
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('admin');
    });
    test('Should Work With Empty State', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
