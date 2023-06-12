import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HeaderNavigationList } from '../../model/items';

import { HeaderLogo } from '../HeaderItems/HeaderLogo';
import { HeaderNavigation } from '../HeaderItems/HeaderNavigation';

import { getUserAuthData, userActions } from 'entities/User';

import { Notifications } from 'features/Notifications';
import { LangSwitcher } from 'features/LangSwitcher';
import { CurrencySwitcher } from 'features/CurrencySwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

import { RoutePath } from 'shared/config/routes/routes';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';

import s from './Header.module.scss';

interface HeaderProps {
    className?: string
}

export const Header = memo(({ className }: HeaderProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate()

    const navigationList = useMemo(() => HeaderNavigationList.map((item) => (
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
                    <Notifications className={s.item}/>
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
