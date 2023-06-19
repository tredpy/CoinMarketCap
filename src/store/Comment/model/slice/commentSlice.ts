import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '../../../Store';

import { Comment, CurrencyCommentSchema } from '../types/comment';
import {
    fetchCommentByCurrencyId
} from '../services/fetchCommentByCurrencyId/fetchCommentByCurrencyId';

const commentAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
});

export const getCurrencyComment = commentAdapter.getSelectors<StateSchema>(
    (state) => state.currencyComment || commentAdapter.getInitialState()
);

const commentSlice = createSlice({
    name: 'currencyComment',
    initialState: commentAdapter.getInitialState<CurrencyCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentByCurrencyId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentByCurrencyId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>
            ) => {
                state.isLoading = false;
                commentAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentByCurrencyId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { reducer: currencyCommentReducer } = commentSlice;
