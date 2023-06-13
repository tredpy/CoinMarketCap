import { StateSchema } from '../../../../StoreProvider';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
