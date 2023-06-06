import { memo, useState } from 'react';

import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import HideDark from 'shared/assets/icons/HideDark.svg';
import HideLight from 'shared/assets/icons/HideLight.svg';

import s from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="SideBar"
            className={classNames(s.SideBar, { [s.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="SideBarCollapseToggle"
                view={'clear'}
                size={'M'}
                onClick={onToggle}
                className={s.collapseBtn}
            >
                {theme === 'dark' ? <HideLight/> : <HideDark/>}
            </Button>
        </div>
    );
});
