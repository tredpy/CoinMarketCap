import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { classNames } from 'helpers/classNames/classNames';
import { RoutePath } from 'routes/RouteConfig/RouteConfig';

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

    const onBackToHomepageClickHandler = () => {
        navigate(RoutePath.MAIN)
    }

    return (
        <div
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
                onClick={onBackToHomepageClickHandler}
            >
                {t('Вернуться на Главную')}
            </Button>
        </div>
    );
});
