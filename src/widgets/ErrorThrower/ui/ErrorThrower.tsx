import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import s from './ErrorThrower.module.scss';

interface ErrorThrowerProps {
    className?: string
}

export const ErrorThrower = ({ className }: ErrorThrowerProps) => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div
            data-testid="ErrorThrower"
            className={classNames(s.ErrorThrower, {}, [className, theme])}
        >
            <p className={s.title}>{t('Произошла непредвиденная ошибка')}</p>
            <Button
                onClick={reloadPage}
                view={'background'}
                className={s.reloadBtn}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
