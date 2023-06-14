import { getProfileIsLoading } from './getProfileIsLoading';

import { StateSchema } from '../../../../Store';

describe('getProfileIsLoading', () => {
    test('Should Work With Filled State', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('Should Work With Empty State', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
