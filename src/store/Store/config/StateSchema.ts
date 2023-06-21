import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';

import { UserSchema } from '../../User';
import { Login } from '../../LoginByUsername';
import { ProfileSchema } from '../../Profile';
import { CurrencyCommentsSchema } from '../../Comment';
import { AddNewCommentSchema } from '../../AddNewComment';

export interface StateSchema {
    user: UserSchema
    loginForm?: Login
    profile?: ProfileSchema
    currencyComments?: CurrencyCommentsSchema
    addNewComment?: AddNewCommentSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    coinGeckoApi: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
