import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames, Mods } from 'helpers/classNames/classNames';

import s from './AppLink.module.scss';

export type AppLinkView = 'clear' | 'primary'
export type AppLinkSize = 'M' | 'L'

interface AppLinkProps extends LinkProps {
    className?: string
    view?: AppLinkView
    size?: AppLinkSize
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        view = 'clear',
        size = 'L',
        ...otherProps
    } = props;

    const mods: Mods = {
        [s[view]]: true,
        [s[size]]: true
    }

    return (
        <Link
            data-testid="AppLink"
            to={to}
            className={classNames(s.AppLink, mods, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
