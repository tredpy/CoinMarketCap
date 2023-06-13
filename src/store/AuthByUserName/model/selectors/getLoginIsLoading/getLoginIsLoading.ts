import { StateSchema } from '../../../../StoreProvider';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
