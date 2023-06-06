import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

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
