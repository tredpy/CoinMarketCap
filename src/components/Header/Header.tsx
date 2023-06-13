import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserAuthData, userActions } from 'store/User';

import { NavigationList } from 'routes/NavigationList/NavigationList';
import { RoutePath } from 'routes/RouteConfig/RouteConfig';

import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'helpers/classNames/classNames';

import { HeaderNotifications } from '../HeaderNotifications/HeaderNotifications';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import { CurrencySwitcher } from '../CurrencySwitcher/CurrencySwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';

import { Button } from 'ui/Button/Button';

import { useTranslation } from 'react-i18next';

import s from './Header.module.scss';

interface HeaderProps {
    className?: string
}

export const Header = memo(({ className }: HeaderProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate()

    const navigationList = useMemo(() => NavigationList.map((item) => (
        <HeaderNavigation
            item={item}
            key={item.path}
        />
    )), []);

    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onLogin = useCallback(() => {
        navigate(RoutePath.LOGIN)
    }, [navigate])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch])

    if (authData) {
        return (
            <div
                data-testid="Header"
                className={classNames(s.Header, {}, [className])}
            >
                <HeaderLogo/>
                <div className={s.navigation}>
                    {navigationList}
                </div>
                <div className={s.menu}>
                    <LangSwitcher className={s.item}/>
                    <CurrencySwitcher className={s.item}/>
                    <ThemeSwitcher className={s.item}/>
                    <HeaderNotifications className={s.item}/>
                    <Button
                        view={'border'}
                        size={'M'}
                        className={s.item}
                        onClick={onLogout}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div
            data-testid="Header"
            className={classNames(s.Header, {}, [className])}
        >
            <HeaderLogo/>
            <div className={s.navigation}>
                {navigationList}
            </div>
            <div className={s.menu}>
                <LangSwitcher className={s.item}/>
                <CurrencySwitcher className={s.item}/>
                <ThemeSwitcher className={s.item}/>
                <Button
                    view={'border'}
                    size={'M'}
                    className={s.item}
                    onClick={onLogin}
                >
                    {t('Вход')}
                </Button>
                <Button
                    view={'background'}
                    size={'M'}
                    className={s.item}
                >
                    {t('Регистрация')}
                </Button>
            </div>
        </div>
    );
});
