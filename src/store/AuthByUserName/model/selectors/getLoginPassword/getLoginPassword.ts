import { StateSchema } from '../../../../StoreProvider';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
