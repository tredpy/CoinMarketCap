import { memo, useState } from 'react';

import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from 'hooks/useTheme/useTheme';

import HideDark from 'assets/icons/HideDark.svg';
import HideLight from 'assets/icons/HideLight.svg';
import ShowLight from 'assets/icons/ShowLight.svg';
import ShowDark from 'assets/icons/ShowDark.svg';

import { Button } from 'ui/Button/Button';

import s from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const { theme } = useTheme();

    const [collapsed, setCollapsed] = useState(false);

    const onToggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="SideBar"
            className={classNames(s.SideBar, { [s.collapsed]: collapsed }, [className])}
        >
            {theme === 'dark'
                ? <Button
                    data-testid="SideBarCollapseToggle"
                    view={'clear'}
                    size={'M'}
                    onClick={onToggleCollapse}
                    className={s.collapseBtn}
                >
                    {
                        collapsed ? <ShowLight className={s.icon}/> : <HideLight className={s.icon}/>
                    }
                </Button>
                : <Button
                    data-testid="SideBarCollapseToggle"
                    view={'clear'}
                    size={'M'}
                    onClick={onToggleCollapse}
                    className={s.collapseBtn}
                >
                    {
                        collapsed ? <ShowDark className={s.icon}/> : <HideDark className={s.icon}/>
                    }
                </Button>
            }
        </div>
    );
});
