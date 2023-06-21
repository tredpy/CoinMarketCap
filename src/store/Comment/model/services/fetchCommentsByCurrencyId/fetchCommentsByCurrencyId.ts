import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '../../../../Store';

import { Comment } from '../../types/comment';

export const fetchCommentsByCurrencyId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
    >(
        'fetchCommentsByCurrencyId',
        async (currencyId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            if (!currencyId) {
                return rejectWithValue('error');
            }

            try {
                const response = await extra.api.get<Comment[]>('/comments', {
                    params: {
                        currencyId,
                        _expand: 'user'
                    }
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        }
    );
