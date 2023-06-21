import { createSlice } from '@reduxjs/toolkit'
import { fetchWatchlistCurrencies } from '../services/fetchWatchlistCurrencies/fetchWatchlistCurrencies';

const initialState: any = {
    assets: [],
    favoriteAssets: []
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWatchlistCurrencies.fulfilled, (state, action) => {
            state.favoriteAssets.push(action.payload)
        })
    }
})

export const { reducer: currencyCommentsReducer } = currencySlice;
