import { StateSchema } from '../../../../Store';

export const getCurrencyCommentError = (state: StateSchema) => state.currencyComment?.error;
