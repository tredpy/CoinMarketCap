import { StateSchema } from '../../../../Store';

export const getAddNewCommentError = (state: StateSchema) => state.addNewComment?.error;
