import { memo, useState } from 'react';

import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import HideDark from 'shared/assets/icons/HideDark.svg';
import HideLight from 'shared/assets/icons/HideLight.svg';
import ShowLight from 'shared/assets/icons/ShowLight.svg';
import ShowDark from 'shared/assets/icons/ShowDark.svg';

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
