import { getProfileError } from './getProfileError';

import { StateSchema } from '../../../../Store';

describe('getProfileError', () => {
    test('Should Return Error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'ERROR'
            }
        };
        expect(getProfileError(state as StateSchema)).toEqual('ERROR');
    });
    test('Should Work With Empty State', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
