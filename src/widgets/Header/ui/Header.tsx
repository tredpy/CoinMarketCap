import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routes/routes';

import { useTranslation } from 'react-i18next';

import s from './Header.module.scss';

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const { t } = useTranslation();

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
                    to={RoutePath.PROFILE} className={s.link}
                >
                    {t('Профиль')}
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
            </div>
            <div className={s.menu}>
                <ThemeSwitcher className={s.item}/>
                <LangSwitcher className={s.item}/>
                <Button
                    view={'border'}
                    size={'M'}
                    className={s.item}
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
};
