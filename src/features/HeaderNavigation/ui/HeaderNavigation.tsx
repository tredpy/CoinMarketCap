import { RoutePath } from 'shared/config/routes/routes';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import { useTranslation } from 'react-i18next';

import s from './HeaderNavigation.module.scss'

interface HeaderNavigationProps {
    className?: string
}

export const HeaderNavigation = ({ className }: HeaderNavigationProps) => {
    const { t } = useTranslation();

    return (
        <div
            data-testid="HeaderNavigation"
            className={classNames('', {}, [className])}
        >
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
    );
};
