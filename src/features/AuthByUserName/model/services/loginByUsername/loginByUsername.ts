import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { RoutePath } from 'shared/config/routes/routes';

import { User, userActions } from 'entities/User';

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:9999/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            window.location.assign(RoutePath.MAIN);

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    }
);
