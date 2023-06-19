import { EntityState } from '@reduxjs/toolkit';

import { User } from '../../../User';

export interface Comment {
    id: string
    user: User
    text: string
}

export interface CurrencyCommentSchema extends EntityState<Comment> {
    isLoading?: boolean
    error?: string
}
