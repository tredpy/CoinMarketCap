import { StateSchema } from '../../../../StoreProvider';

export const getProfileError = (state: StateSchema) => state.profile?.error
