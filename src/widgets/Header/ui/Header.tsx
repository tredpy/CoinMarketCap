import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData, userActions } from 'entities/User';
import { Counter } from 'entities/Counter';

import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

import { RoutePath } from 'shared/config/routes/routes';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import { useTranslation } from 'react-i18next';

import s from './Header.module.scss';

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    const onLogoutClickHandler = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch])

    if (authData) {
        return (
            <div
                data-testid="Header"
                className={classNames(s.Header, {}, [className])}
            >
                <Button
                    view={'clear'}
                    size={'L'}
                >
                    <AppLink
                        view={'clear'}
                        to={RoutePath.MAIN}
                    >
                        CoinMarketCap
                    </AppLink>
                </Button>
                <div className={s.links}>
                    <AppLink
                        view={'primary'}
                        to={RoutePath.MAIN} className={s.link}
                    >
                        {t('Криптовалюты')}
                    </AppLink>
                    <AppLink
                        view={'primary'}
                        to={RoutePath.PORTFOLIO} className={s.link}
                    >
                        {t('Портфель')}
                    </AppLink>
                    <AppLink
                        view={'primary'}
                        to={RoutePath.WATCHLIST} className={s.link}
                    >
                        {t('Избранное')}
                    </AppLink>
                    <AppLink
                        view={'primary'}
                        to={RoutePath.PROFILE} className={s.link}
                    >
                        {t('Профиль')}
                    </AppLink>
                </div>
                <div className={s.menu}>
                    <LangSwitcher className={s.item}/>
                    <Button
                        view={'clear'}
                        size={'M'}
                        className={s.item}
                    >
                        {t('RUB')}
                    </Button>
                    <ThemeSwitcher className={s.item}/>
                    <Button
                        view={'background'}
                        onClick={onToggleModal}
                        className={s.item}
                    >
                    X
                    </Button>
                    <Modal
                        lazy
                        isOpen={isAuthModal}
                        onClose={onToggleModal}>
                        <Counter/>
                    </Modal>
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
            <Button
                view={'clear'}
                size={'L'}
            >
                CoinMarketCap
            </Button>
            <div className={s.links}>
                <AppLink
                    view={'primary'}
                    to={RoutePath.MAIN} className={s.link}
                >
                    {t('Криптовалюты')}
                </AppLink>
                <AppLink
                    view={'primary'}
                    to={RoutePath.PORTFOLIO} className={s.link}
                >
                    {t('Портфель')}
                </AppLink>
                <AppLink
                    view={'primary'}
                    to={RoutePath.WATCHLIST} className={s.link}
                >
                    {t('Избранное')}
                </AppLink>
                <AppLink
                    view={'primary'}
                    to={RoutePath.PROFILE} className={s.link}
                >
                    {t('Профиль')}
                </AppLink>
            </div>
            <div className={s.menu}>
                <LangSwitcher className={s.item}/>
                <Button
                    view={'clear'}
                    size={'M'}
                    className={s.item}
                >
                    {t('USD')}
                </Button>
                <ThemeSwitcher className={s.item}/>
                <Button
                    view={'background'}
                    onClick={onToggleModal}
                    className={s.item}
                >
                    X
                </Button>
                <Modal
                    lazy
                    isOpen={isAuthModal}
                    onClose={onToggleModal}>
                    <Counter/>
                </Modal>
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
