import axios from 'axios';

import { USER_LOCALSTORAGE_KEY } from 'assets/const/localStorage';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
    }
});

export const $coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    headers: {}
});
