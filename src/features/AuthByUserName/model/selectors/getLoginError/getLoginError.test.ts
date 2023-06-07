import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('Should Return Error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error'
            }
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    test('Should Work With Empty State', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
