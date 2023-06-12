import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './ErrorThrower.module.scss';

interface ErrorThrowerProps {
    className?: string
}

export const ErrorThrower = memo(({ className }: ErrorThrowerProps) => {
    const { t } = useTranslation();
    const onReloadPage = () => {
        window.location.reload();
    };

    return (
        <div
            data-testid="ErrorThrower"
            className={classNames(s.ErrorThrower, {}, [className])}
        >
            <Text
                text={t('Произошла непредвиденная ошибка')}
                size={'L'}
                className={s.title}
            />
            <Button
                onClick={onReloadPage}
                view={'background'}
                size={'L'}
                className={s.reloadBtn}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
});
