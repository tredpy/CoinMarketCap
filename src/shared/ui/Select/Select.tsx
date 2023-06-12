import { ChangeEvent, memo, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import s from './Select.module.scss';

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readOnly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        options,
        onChange,
        value,
        readOnly
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={s.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <select
            disabled={readOnly}
            className={classNames(s.select, {}, [className])}
            value={value}
            onChange={onChangeHandler}
        >
            {optionsList}
        </select>
    );
});
