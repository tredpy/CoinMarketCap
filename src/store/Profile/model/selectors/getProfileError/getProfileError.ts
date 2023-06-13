import { StateSchema } from '../../../../Store';

export const getProfileError = (state: StateSchema) => state.profile?.error
