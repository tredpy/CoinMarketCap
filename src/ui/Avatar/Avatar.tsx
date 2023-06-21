import { CSSProperties, memo, useMemo } from 'react';

import { classNames } from 'common/helpers/classNames/classNames';

import s from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(s.Avatar, {}, [className])}
        />
    );
});
