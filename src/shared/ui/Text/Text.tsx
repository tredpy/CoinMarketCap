import { memo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import s from './Text.module.scss';

export type TextView = 'light' | 'primary' | 'error'
export type TextSize = 'M' | 'L'
export type TextAlign = 'right' | 'left' | 'center'

interface TextProps {
    className?: string
    text?: string
    view?: TextView
    size?: TextSize
    align?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        view = 'light',
        size = 'M',
        align = 'left'
    } = props;

    const mods: Mods = {
        [s[view]]: true,
        [s[size]]: true,
        [s[align]]: true
    }

    return (
        <div
            data-testid="Text"
            className={classNames(s.Text, mods, [className])}
        >
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});
