import { StateSchema } from '../../../../StoreProvider';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
