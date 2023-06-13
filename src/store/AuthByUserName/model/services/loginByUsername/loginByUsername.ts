import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from '../../../../User';
import { ThunkConfig } from '../../../../StoreProvider';

import { USER_LOCALSTORAGE_KEY } from 'const/localStorage';
import { RoutePath } from 'routes/RouteConfig/RouteConfig';

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            window.location.assign(RoutePath.MAIN);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);
