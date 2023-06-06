import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import ThemeDark from 'shared/assets/icons/ThemeDark.svg';
import ThemeLight from 'shared/assets/icons/ThemeLight.svg';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            data-testid="ThemeSwitcher"
            className={classNames('', {}, [className])}
            view={'clear'}
            size={'M'}
            onClick={toggleTheme}
        >
            {theme === 'dark' ? <ThemeLight /> : <ThemeDark />}
        </Button>
    );
};
