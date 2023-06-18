import { StateSchema } from '../../../../Store';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
