import { StateSchema } from '../../../../Store';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
