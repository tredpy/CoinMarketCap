import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from '../../../../User';
import { ThunkConfig } from '../../../../Store';

import { USER_LOCALSTORAGE_KEY } from 'common/constants/localStorage';
import { RoutePath } from 'common/routes/RouteConfig/RouteConfig';

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
            window.location.assign(RoutePath.CURRENCIES);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);
