import { EntityState } from '@reduxjs/toolkit';

import { User } from '../../../User';

export interface Comment {
    id: string
    user: User
    text: string
}

export interface CurrencyCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean
    error?: string
}
