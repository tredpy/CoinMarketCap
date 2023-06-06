import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData, userActions } from 'entities/User';

import { HeaderLogo } from 'features/HeaderLogo';
import { HeaderNavigation } from 'features/HeaderNavigation';
import { LangSwitcher } from 'features/LangSwitcher';
import { CurrencySwitcher } from 'features/CurrencySwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { HeaderNotification } from 'features/HeaderNotification';

import { RoutePath } from 'shared/config/routes/routes';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';

import s from './Header.module.scss';

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onLogoutClickHandler = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch])

    if (authData) {
        return (
            <div
                data-testid="Header"
                className={classNames(s.Header, {}, [className])}
            >
                <HeaderLogo/>
                <HeaderNavigation className={s.navigation}/>
                <div className={s.menu}>
                    <LangSwitcher className={s.item}/>
                    <CurrencySwitcher className={s.item}/>
                    <ThemeSwitcher className={s.item}/>
                    <HeaderNotification className={s.item}/>
                    <Button
                        view={'border'}
                        size={'M'}
                        className={s.item}
                        onClick={onLogoutClickHandler}
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
            <HeaderNavigation className={s.navigation}/>
            <div className={s.menu}>
                <LangSwitcher className={s.item}/>
                <CurrencySwitcher className={s.item}/>
                <ThemeSwitcher className={s.item}/>
                <Button
                    view={'border'}
                    size={'M'}
                    className={s.item}
                >
                    <AppLink
                        view={'primary'}
                        to={RoutePath.LOGIN}
                    >
                        {t('Вход')}
                    </AppLink>
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
};
