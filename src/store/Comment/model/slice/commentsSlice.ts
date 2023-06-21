import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '../../../Store';

import { Comment, CurrencyCommentsSchema } from '../types/comment';
import {
    fetchCommentsByCurrencyId
} from '../services/fetchCommentsByCurrencyId/fetchCommentsByCurrencyId';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
});

export const getCurrencyComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.currencyComments || commentsAdapter.getInitialState()
);

const commentsSlice = createSlice({
    name: 'currencyComments',
    initialState: commentsAdapter.getInitialState<CurrencyCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByCurrencyId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByCurrencyId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByCurrencyId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { reducer: currencyCommentsReducer } = commentsSlice;
