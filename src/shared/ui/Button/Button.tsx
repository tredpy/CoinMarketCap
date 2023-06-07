import { ButtonHTMLAttributes, memo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import s from './Button.module.scss';

export type ButtonView = 'clear' | 'border' | 'background'
export type ButtonSize = 'M' | 'L'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    view?: ButtonView
    size?: ButtonSize
    disabled?: boolean
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        view = 'clear',
        size = 'M',
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [s[view]]: true,
        [s[size]]: true,
        [s.disabled]: disabled
    };

    return (
        <button
            data-testid="Button"
            type="button"
            className={classNames(s.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
