import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import s from './Text.module.scss';

export type TextView = 'light' | 'error'
export type TextSize = 'L'

interface TextProps {
    className?: string
    text?: string
    view?: TextView
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        view,
        size
    } = props;

    return (
        <div
            data-testid="Text"
            className={classNames(s.Text, { [s[view]]: true, [s[size]]: true }, [className])}
        >
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});
