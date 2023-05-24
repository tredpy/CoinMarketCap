import { useTheme } from 'shared/lib/useTheme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import HideDark from 'shared/assets/icons/HideDark.svg';
import HideLight from 'shared/assets/icons/HideLight.svg';
import s from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}
export const SideBar = ({ className }: SideBarProps) => {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(s.SideBar, { [s.collapsed]: collapsed }, [className])}
        >
            <Button
                view={'clear'}
                onClick={onToggle}
            >
                {theme === 'dark' ? <HideLight /> : <HideDark />}
            </Button>
            <div className={s.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
