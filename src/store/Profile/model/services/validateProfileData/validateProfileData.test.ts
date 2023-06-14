import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    username: 'Admin',
    age: 33,
    city: 'Moscow'
};

describe('ValidateProfileData', () => {
    test('Should Return Success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('Without username', async () => {
        const result = validateProfileData({ ...data, username: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ]);
    });

    test('With Incorrect Age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ]);
    });

    test('With Incorrect City', async () => {
        const result = validateProfileData({ ...data, city: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_CITY
        ]);
    });

    test('With Incorrect Data', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY
        ]);
    });
});
