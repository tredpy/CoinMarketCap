import { memo } from 'react';

import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from 'hooks/useTheme/useTheme';

import ThemeDark from 'assets/icons/ThemeDark.svg';
import ThemeLight from 'assets/icons/ThemeLight.svg';

import { Button } from 'ui/Button/Button';

import s from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, onToggleTheme } = useTheme();

    return (
        <Button
            data-testid="ThemeSwitcher"
            className={classNames('', {}, [className])}
            view={'clear'}
            size={'M'}
            onClick={onToggleTheme}
        >
            {
                theme === 'dark'
                    ? <ThemeLight className={s.icon}/>
                    : <ThemeDark className={s.icon}/>
            }
        </Button>
    );
});
