import { memo } from 'react';

import { Comment } from 'store/Comment';

import { RoutePath } from 'routes/RouteConfig/RouteConfig';

import { classNames } from 'helpers/classNames/classNames';

import { Skeleton } from 'ui/Skeleton/Skeleton';
import { AppLink } from 'ui/AppLink/AppLink';
import { Avatar } from 'ui/Avatar/Avatar';
import { Text } from 'ui/Text/Text';

import s from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(s.CommentItem, {}, [className])}>
                <div className={s.header}>
                    <Skeleton width={40} height={40} border="15%" />
                    <Skeleton height={15} width={80} className={s.username} />
                </div>
                <Skeleton className={s.text} width="100%" height={30} />
            </div>
        );
    }

    return (
        <div className={classNames(s.CommentItem, {}, [className])}>
            <AppLink to={`${RoutePath.PROFILE}${comment.user.id}`} className={s.header}>
                {comment.user.avatar ? <Avatar size={40} src={comment.user.avatar} /> : null}
                <Text className={s.username} text={comment.user.username} />
            </AppLink>
            <Text className={s.text} text={comment.text} />
        </div>
    );
});
