import { StateSchema } from '../../../../Store';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
