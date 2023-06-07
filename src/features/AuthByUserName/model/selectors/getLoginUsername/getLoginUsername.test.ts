import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('Should Return Value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin'
            }
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });
    test('Should Work With Empty State', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
