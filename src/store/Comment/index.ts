export type { Comment, CurrencyCommentsSchema } from './model/types/comment';

export { getCurrencyCommentsIsLoading } from './model/selectors/getCurrencyCommentsIsLoading/getCurrencyCommentsIsLoading';
export { getCurrencyCommentsError } from './model/selectors/getCurrencyCommentsError/getCurrencyCommentsError';

export { fetchCommentsByCurrencyId } from './model/services/fetchCommentsByCurrencyId/fetchCommentsByCurrencyId';

export { currencyCommentsReducer } from './model/slice/commentsSlice';
export { getCurrencyComments } from './model/slice/commentsSlice';
