import { StateSchema } from '../../../../Store';

export const getProfileReadOnly = (state: StateSchema) => state.profile?.readOnly;
