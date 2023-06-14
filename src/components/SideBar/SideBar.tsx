import { memo, useState } from 'react';

import { classNames, Mods } from 'helpers/classNames/classNames';

import SideBarHide from 'assets/icons/SideBarHide.svg';
import SideBarShow from 'assets/icons/SideBarShow.svg';

import { Button } from 'ui/Button/Button';

import s from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    const mods: Mods = {
        [s.collapsed]: collapsed
    }

    return (
        <div
            data-testid="SideBar"
            className={classNames(s.SideBar, mods, [className])}
        >
            <Button
                data-testid="SideBarCollapseToggle"
                view={'clear'}
                size={'M'}
                onClick={onToggleCollapse}
                className={s.collapseBtn}
            >
                {
                    collapsed
                        ? <SideBarShow className={s.icon}/>
                        : <SideBarHide className={s.icon}/>
                }
            </Button>
        </div>
    );
});
