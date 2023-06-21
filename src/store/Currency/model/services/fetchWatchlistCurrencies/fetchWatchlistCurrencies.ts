import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '../../../../Store';

import { Currency } from '../../types/currency';

export const fetchWatchlistCurrencies = createAsyncThunk<
    Currency,
    string,
    ThunkConfig<string>
    >(
        'fetchWatchlistCurrencies',
        // @ts-ignore
        async (currency, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            if (!currency) {
                return rejectWithValue('error');
            }

            try {
                const assets = await extra.coinGeckoApi.get<Currency>(
                    `coins/${currency}/market_chart?vs_currency=usd&days=90`
                )
                console.log(assets.data)
                const singleAsset = await extra.coinGeckoApi.get<Currency>(
                    `coins/markets?vs_currency=usd&ids=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
                )
                return {
                    name: currency,
                    price_chart_data: assets.data.prices.slice(
                        assets.data.prices.length - 60,
                        assets.data.prices.length - 1
                    ),
                    singleAsset: singleAsset.data
                }
            } catch (error: any) {
                if (error.response?.data.message) {
                    return rejectWithValue(error.response.data.message)
                } else {
                    return rejectWithValue(error.message)
                }
            }
        }
    );
