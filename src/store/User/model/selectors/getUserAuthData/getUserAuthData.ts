import { StateSchema } from '../../../../StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
