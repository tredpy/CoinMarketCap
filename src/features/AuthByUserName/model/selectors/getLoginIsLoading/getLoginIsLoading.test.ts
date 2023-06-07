import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('Should Return True', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('Should Work With Empty State', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
