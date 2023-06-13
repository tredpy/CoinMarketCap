import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { NavigationType } from 'routes/NavigationList/NavigationList';

import { AppLink } from 'ui/AppLink/AppLink';

import s from './HeaderNavigation.module.scss'

interface HeaderNavigationProps {
    item: NavigationType
}

export const HeaderNavigation = memo(({ item }: HeaderNavigationProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            data-testid="HeaderNavigation"
            view={'primary'}
            size={'M'}
            to={item.path}
            className={s.links}
        >
            {t(item.title)}
        </AppLink>
    );
});
