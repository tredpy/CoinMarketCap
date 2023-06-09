import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { Button } from 'shared/ui/Button/Button';
import ThemeDark from 'shared/assets/icons/ThemeDark.svg';
import ThemeLight from 'shared/assets/icons/ThemeLight.svg';

import s from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            data-testid="ThemeSwitcher"
            className={classNames('', {}, [className])}
            view={'clear'}
            size={'M'}
            onClick={toggleTheme}
        >
            {theme === 'dark' ? <ThemeLight className={s.icon}/> : <ThemeDark className={s.icon}/>}
        </Button>
    );
});
