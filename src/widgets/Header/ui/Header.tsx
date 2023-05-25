import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import DarkIcon from 'shared/assets/icons/DarkTheme.svg';
import s from './Header.module.scss';

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(s.Header, {}, [className])}>
            <div>
                <DarkIcon/>
            </div>
            <div className={s.links}>
                <AppLink view={'primary'} to="/" className={s.menu}>
                    {t('Криптовалюты')}
                </AppLink>
                <AppLink view={'primary'} to="/profile" className={s.menu}>
                    {t('Профиль')}
                </AppLink>
                <AppLink view={'primary'} to="/portfolio" className={s.menu}>
                    {t('Портфель')}
                </AppLink>
                <AppLink view={'primary'} to="/watchlist" className={s.menu}>
                    {t('Избранное')}
                </AppLink>
            </div>
            <div className={s.links}>
                <ThemeSwitcher className={s.menu}/>
                <LangSwitcher className={s.menu}/>
                <Button
                    view={'border'}
                    className={s.menu}
                >
                    {t('Вход')}
                </Button>
                <Button
                    view={'background'}
                    className={s.menu}
                >
                    {t('Зарегестрироваться')}
                </Button>
            </div>
        </div>
    );
};
