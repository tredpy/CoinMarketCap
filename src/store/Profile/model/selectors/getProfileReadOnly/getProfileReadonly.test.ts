import { getProfileReadOnly } from './getProfileReadOnly';

import { StateSchema } from '../../../../Store';

describe('getProfileReadonly', () => {
    test('Should Work With Filled State', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readOnly: true
            }
        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
    });
    test('Should Work With Empty State', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
