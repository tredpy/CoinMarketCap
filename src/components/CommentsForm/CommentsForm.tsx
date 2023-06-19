import { memo } from 'react';

import { Comment } from 'store/Comment';

import { CommentItem } from '../CommentItem/CommentItem';

import { classNames } from 'helpers/classNames/classNames';

import s from './CommentsForm.module.scss';

interface CommentsFormProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentsForm = memo((props: CommentsFormProps) => {
    const { className, isLoading, comments } = props;

    return (
        <div className={classNames(s.CommentsForm, {}, [className])}>
            {comments!.map((comment) => (
                <CommentItem
                    key={comment.id}
                    isLoading={isLoading}
                    className={s.comment}
                    comment={comment}
                />
            ))}
        </div>
    );
});
