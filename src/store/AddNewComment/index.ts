export type { AddNewCommentSchema } from './model/types/addNewComment';

export { addNewCommentActions, addNewCommentReducer } from './model/slices/addNewCommentSlice';

export { getAddNewCommentError } from './model/selectors/getAddNewCommentError/getAddNewCommentError';
export { getAddNewCommentText } from './model/selectors/getAddNewCommentText/getAddNewCommentText';
