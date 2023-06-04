import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './ErrorThrower.module.scss';

interface ErrorThrowerProps {
    className?: string
}

export const ErrorThrower = ({ className }: ErrorThrowerProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
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
                onClick={reloadPage}
                view={'background'}
                size={'L'}
                className={s.reloadBtn}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
