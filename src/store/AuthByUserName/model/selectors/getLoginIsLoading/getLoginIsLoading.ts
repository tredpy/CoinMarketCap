import { StateSchema } from '../../../../Store';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
