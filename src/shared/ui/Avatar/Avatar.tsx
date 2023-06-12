import { CSSProperties, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import s from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar = (props: AvatarProps) => {
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
};
