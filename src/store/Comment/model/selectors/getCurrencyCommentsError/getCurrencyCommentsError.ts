import { StateSchema } from '../../../../Store';

export const getCurrencyCommentsError = (state: StateSchema) => state.currencyComments?.error;
