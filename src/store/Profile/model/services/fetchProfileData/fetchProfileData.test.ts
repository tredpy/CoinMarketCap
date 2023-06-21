import { fetchProfileData } from './fetchProfileData';

import { TestAsyncThunk } from 'common/tests/TestAsyncThunk/TestAsyncThunk';

const data = {
    username: 'Admin',
    age: 33,
    city: 'Moscow'
};

describe('fetchProfileData', () => {
    test('Should Return Success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Should Return Error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
