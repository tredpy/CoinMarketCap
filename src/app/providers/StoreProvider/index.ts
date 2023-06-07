import { StoreProvider } from './ui/StoreProvider';

import { AppDispatch, createReduxStore } from './config/store';
import { StateSchema, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    type AppDispatch,
    type ThunkConfig
}
