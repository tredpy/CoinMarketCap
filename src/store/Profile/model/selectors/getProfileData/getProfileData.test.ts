import { getProfileData } from './getProfileData';

import { StateSchema } from '../../../../Store';

describe('getProfileData', () => {
    test('Should Return Error', () => {
        const data = {
            username: 'Admin',
            age: 33,
            city: 'Moscow'
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('Should Work With Empty State', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
