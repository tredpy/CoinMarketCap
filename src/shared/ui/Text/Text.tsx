import { memo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import s from './Text.module.scss';

export type TextView = 'light' | 'primary' | 'error'
export type TextSize = 'M' | 'L'

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
        view = 'light',
        size = 'M'
    } = props;

    const mods: Mods = {
        [s[view]]: true,
        [s[size]]: true
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
