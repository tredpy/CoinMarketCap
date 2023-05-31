import { User } from './ui/User';

import { userActions, userReducer } from './model/slice/userSlice';
import { UserSchema } from './model/types/user';

export {
    User,
    userReducer,
    userActions,
    type UserSchema
}
