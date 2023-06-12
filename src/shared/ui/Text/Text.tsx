import { memo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import s from './Text.module.scss';

export type TextView = 'light' | 'dark' | 'primary' | 'error'
export type TextSize = 'M' | 'L' | 'XL'
export type TextAlign = 'right' | 'left' | 'center'

interface TextProps {
    className?: string
    text?: string
    view?: TextView
    size?: TextSize
    align?: TextAlign
    readOnly?: boolean
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        view = 'light',
        size = 'M',
        align = 'left',
        readOnly
    } = props;

    const mods: Mods = {
        [s[view]]: true,
        [s[size]]: true,
        [s[align]]: true,
        [s.readOnly]: readOnly
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
