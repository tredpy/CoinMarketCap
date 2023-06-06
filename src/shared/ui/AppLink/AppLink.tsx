import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import s from './AppLink.module.scss';

export type AppLinkView = 'clear' | 'primary'
export type AppLinkSize = 'L'

interface AppLinkProps extends LinkProps {
    className?: string
    view?: AppLinkView
    size?: AppLinkSize
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        view,
        size,
        ...otherProps
    } = props;

    return (
        <Link
            data-testid="AppLink"
            to={to}
            className={classNames(s.AppLink, {}, [className, s[view], s[size]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
