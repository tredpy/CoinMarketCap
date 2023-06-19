export type { Comment, CurrencyCommentSchema } from './model/types/comment';

export { getCurrencyCommentIsLoading } from './model/selectors/getCurrencyCommentIsLoading/getCurrencyCommentIsLoading';
export { getCurrencyCommentError } from './model/selectors/getCurrencyCommentError/getCurrencyCommentError';

export { fetchCommentByCurrencyId } from './model/services/fetchCommentByCurrencyId/fetchCommentByCurrencyId';

export { currencyCommentReducer } from './model/slice/commentSlice';
export { getCurrencyComment } from './model/slice/commentSlice';
