import { StateSchema } from '../../../../Store';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
