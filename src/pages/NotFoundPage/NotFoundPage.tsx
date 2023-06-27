import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageWrapper } from 'components/PageWrapper/PageWrapper';

import { classNames } from 'common/helpers/classNames/classNames';
import { RoutePath } from 'common/routes/RouteConfig/RouteConfig';

import { Button } from 'ui/Button/Button';
import { Text } from 'ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate()

    const onBackToHomepage = () => {
        navigate(RoutePath.CURRENCIES)
    }

    return (
        <PageWrapper
            data-testid="NotFoundPage"
            className={classNames(s.NotFoundPage, {}, [className])}
        >
            <Text
                text={t('Упс, что-то пошло не так')}
                view={'primary'}
                size={'L'}
                className={s.item}
            />
            <Text
                text={t('Извините, мы не смогли найти вашу страницу')}
                className={s.item}
                view={'light'}
                size={'M'}
            />
            <Button
                view={'border'}
                size={'L'}
                className={s.item}
                onClick={onBackToHomepage}
            >
                {t('Вернуться на Главную')}
            </Button>
        </PageWrapper>
    );
});
