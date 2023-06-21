import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { NavigationType } from 'common/routes/NavigationList/NavigationList';

import { AppLink } from 'ui/AppLink/AppLink';

import s from './Navigation.module.scss'

interface HeaderNavigationProps {
    item: NavigationType
}

export const Navigation = memo(({ item }: HeaderNavigationProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            data-testid="Navigation"
            view={'primary'}
            size={'M'}
            to={item.path}
            className={s.links}
        >
            {t(item.title)}
        </AppLink>
    );
});
