import { StateSchema } from '../../../../Store';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
