import { getProfileForm } from './getProfileForm';

import { StateSchema } from '../../../../Store';

describe('getProfileForm', () => {
    test('Should Return Error', () => {
        const data = {
            username: 'Admin',
            age: 33,
            city: 'Moscow'
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('Should Work With Empty State', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
