import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';

import s from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation('login');

    return (
        <div
            data-testid="LoginForm"
            className={classNames(s.LoginForm, {}, [className])}>
            <Input
                placeholder={t('Логин')}/>
            <Input
                placeholder={t('Пароль')}/>
            <Button
                view={'background'}
                size={'M'}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
