import React, { InputHTMLAttributes, memo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readOnly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [s.readOnly]: readOnly
    };

    return (
        <div
            data-testid="Input"
            className={classNames(s.Input, mods, [className])}
        >
            {placeholder && (
                <div className={s.placeholder}>
                    {`${placeholder}`}
                </div>
            )}
            <input
                className={s.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readOnly}
                {...otherProps}
            />
        </div>
    );
})
