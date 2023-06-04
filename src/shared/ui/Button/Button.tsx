import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import s from './Button.module.scss';

export type ButtonView = 'clear' | 'border' | 'background'
export type ButtonSize = 'M' | 'L'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    view?: ButtonView
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        view,
        size,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [s.disabled]: disabled
    };

    return (
        <button
            data-testid="Button"
            type="button"
            className={classNames(s.Button, mods, [className, s[view], s[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
