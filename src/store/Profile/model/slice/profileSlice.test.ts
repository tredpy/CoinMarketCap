import { profileActions, profileReducer } from './profileSlice';

import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';

const data = {
    username: 'Admin',
    age: 33,
    city: 'Moscow'
};

describe('profileSlice', () => {
    test('Test Set Readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readOnly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadOnly(true)
        )).toEqual({ readOnly: true });
    });

    test('Test Cancel Edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readOnly: true,
            validateErrors: undefined,
            data,
            form: data
        });
    });

    test('Test Update Profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'ADMIN' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: 'admin'
            })
        )).toEqual({
            form: { username: 'admin' }
        });
    });

    test('Test Update Profile Service Pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        });
    });

    test('Test Update Profile Service Fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readOnly: true,
            validateError: undefined,
            form: data,
            data
        });
    });
});
