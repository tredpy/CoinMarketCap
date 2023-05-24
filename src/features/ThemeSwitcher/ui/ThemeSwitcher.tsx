import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import DarkIcon from 'shared/assets/icons/DarkTheme.svg';
import LightIcon from 'shared/assets/icons/LightTheme.svg';

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            view={'clear'}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === 'dark' ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
};
