import { StateSchema } from '../../../../StoreProvider';

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading
