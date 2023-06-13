import { StateSchema } from '../../../../StoreProvider';

export const getProfileReadOnly = (state: StateSchema) => state.profile?.readOnly;
