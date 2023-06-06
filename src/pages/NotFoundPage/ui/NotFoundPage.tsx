import { memo } from 'react';

import { RoutePath } from 'shared/config/routes/routes';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text } from 'shared/ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div
            data-testid="NotFoundPage"
            className={classNames(s.NotFoundPage, {}, [className])}
        >
            <Text
                text={t('Упс, что-то пошло не так')}
                size={'L'}
                className={s.item}
            />
            <Text
                text={t('Извините, мы не смогли найти вашу страницу')}
                className={s.item}
                view={'light'}
            />
            <Button
                view={'border'}
                size={'L'}
                className={s.item}
            >
                <AppLink
                    view={'primary'}
                    to={RoutePath.MAIN}
                >
                    {t('Вернуться на Главную')}
                </AppLink>
            </Button>
        </div>
    );
});
