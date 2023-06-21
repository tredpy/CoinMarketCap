import { StateSchema } from '../../../../Store';

export const getAddNewCommentText = (state: StateSchema) => state.addNewComment?.text;
