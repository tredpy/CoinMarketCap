import { memo, MutableRefObject, ReactNode, useRef } from 'react';

import { useDynamicPagination } from 'common/hooks/useDynamicPagination/useDynamicPagination';
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

    useDynamicPagination({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(s.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
