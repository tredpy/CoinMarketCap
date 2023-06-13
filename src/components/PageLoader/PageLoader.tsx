import { memo } from 'react';

import { classNames } from 'helpers/classNames/classNames';

import { Loader } from 'ui/Loader/Loader';

import s from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div
        data-testid="PageLoader"
        className={classNames(s.PageLoader, {}, [className])}
    >
        <Loader />
    </div>
));
