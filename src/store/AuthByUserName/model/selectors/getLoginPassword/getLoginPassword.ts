import { StateSchema } from '../../../../Store';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
