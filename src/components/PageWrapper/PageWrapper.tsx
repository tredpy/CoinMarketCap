import React, { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getScrollByPath, scrollActions } from 'store/SaveScrollPosition';
import { StateSchema } from 'store/Store';

import { useDynamicPagination } from 'common/hooks/useDynamicPagination/useDynamicPagination';
import { useInitialEffect } from 'common/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'common/hooks/useAppDispatch/useAppDispatch';
import { useThrottle } from 'common/hooks/useThrottle/useThrottle';
import { classNames } from 'common/helpers/classNames/classNames';

import s from './PageWrapper.module.scss';

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const PageWrapper = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();

    const { pathname } = useLocation();

    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollByPath(state, pathname)
    );

    useDynamicPagination({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
        console.log('SCROLL', e.currentTarget.scrollTop)
        dispatch(scrollActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(s.PageWrapper, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? <div className={s.trigger} ref={triggerRef} /> : null}
        </section>
    );
});
