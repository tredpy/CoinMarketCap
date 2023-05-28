import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import DarkTheme from 'shared/assets/icons/DarkTheme.svg';
import LightTheme from 'shared/assets/icons/LightTheme.svg';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            data-testid="ThemeSwitcher"
            view={'clear'}
            size={'M'}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === 'dark' ? <LightTheme/> : <DarkTheme/>}
        </Button>
    );
};
