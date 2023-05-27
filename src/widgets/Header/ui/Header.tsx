import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routes/routes';
import s from './Header.module.scss';

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(s.Header, {}, [className])}>
            <Button view={'clear'} size={'l'}>
                CoinMarketCap
            </Button>
            <div className={s.links}>
                <AppLink view={'primary'} to={RoutePath.MAIN} className={s.link}>
                    {t('Криптовалюты')}
                </AppLink>
                <AppLink view={'primary'} to={RoutePath.PROFILE} className={s.link}>
                    {t('Профиль')}
                </AppLink>
                <AppLink view={'primary'} to={RoutePath.PORTFOLIO} className={s.link}>
                    {t('Портфель')}
                </AppLink>
                <AppLink view={'primary'} to={RoutePath.WATCHLIST} className={s.link}>
                    {t('Избранное')}
                </AppLink>
            </div>
            <div className={s.menu}>
                <ThemeSwitcher className={s.item}/>
                <LangSwitcher className={s.item}/>
                <Button
                    view={'border'}
                    size={'m'}
                    className={s.item}
                >
                    {t('Вход')}
                </Button>
                <Button
                    view={'background'}
                    size={'m'}
                    className={s.item}
                >
                    {t('Регистрация')}
                </Button>
            </div>
        </div>
    );
};
