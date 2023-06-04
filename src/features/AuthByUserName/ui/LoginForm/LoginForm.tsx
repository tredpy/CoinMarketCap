import { memo, useCallback } from 'react';

import { useSelector } from 'react-redux';

import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation('login');

    const dispatch = useAppDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div
            data-testid="LoginForm"
            className={classNames(s.LoginForm, {}, [className])}
        >
            <Text text={t('Логин')}/>
            <Input
                placeholder={t('Введите ваш логин...')}
                onChange={onChangeUsername}
                value={username}
            />
            <Text text={t('Пароль')}/>
            <Input
                placeholder={t('Введите ваш пароль...')}
                onChange={onChangePassword}
                value={password}
                type='password'
            />
            {error && <Text
                text={t('Неверный логин или пароль')}
                view={'error'}
                className={s.error}
            />}
            <Button
                view={'background'}
                size={'L'}
                onClick={onLoginClick}
                disabled={isLoading}
                className={s.btn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
