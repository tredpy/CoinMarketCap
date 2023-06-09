import { memo } from 'react';

import { classNames } from 'common/helpers/classNames/classNames';

import s from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div
        data-testid="Loader"
        className={classNames(s.ldsRing, {}, [className])}
    >
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
));
