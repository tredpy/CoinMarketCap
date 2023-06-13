import { StateSchema } from '../../../../StoreProvider';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
