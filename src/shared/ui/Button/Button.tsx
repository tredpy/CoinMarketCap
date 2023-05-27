import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export type ButtonView = 'clear' | 'border' | 'background'
export type ButtonSize = 'm' | 'l'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    view?: ButtonView
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        view,
        size,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(s.Button, {}, [className, s[view], s[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
