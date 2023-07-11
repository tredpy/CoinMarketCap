import React, { memo } from 'react';

import { classNames } from 'common/helpers/classNames/classNames';

import s from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGElement>>
    inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props;

    return (
        <Svg
            className={classNames(inverted ? s.inverted : s.Icon, {}, [
                className
            ])}
            {...otherProps}
        />
    );
});
