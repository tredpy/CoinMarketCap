import { memo } from 'react';

import { AppLink } from 'shared/ui/AppLink/AppLink';

import { HeaderNavigationType } from '../../../../model/items';

import { useTranslation } from 'react-i18next';

import s from './HeaderNavigation.module.scss'

interface HeaderNavigationProps {
    item: HeaderNavigationType
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
