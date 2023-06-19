import { StateSchema } from '../../../../Store';

export const getCurrencyCommentIsLoading = (state: StateSchema) => state.currencyComment?.isLoading;
