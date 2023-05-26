import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import s from './AppLink.module.scss';

export type AppLinkView = 'primary'

interface AppLinkProps extends LinkProps {
    className?: string
    view?: AppLinkView
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        view,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(s.AppLink, {}, [className, s[view]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
