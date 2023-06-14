import { memo, useState } from 'react';

import { classNames } from 'helpers/classNames/classNames';

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

    return (
        <div
            data-testid="SideBar"
            className={classNames(s.SideBar, { [s.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="SideBarCollapseToggle"
                view={'clear'}
                size={'M'}
                onClick={onToggleCollapse}
                className={s.collapseBtn}
            >
                {
                    collapsed ? <SideBarShow className={s.icon}/> : <SideBarHide className={s.icon}/>
                }
            </Button>
        </div>
    );
});
