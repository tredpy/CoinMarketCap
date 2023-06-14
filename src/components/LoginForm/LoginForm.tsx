import { memo, useCallback } from 'react';

import { useSelector } from 'react-redux';

import {
    loginActions,
    loginReducer,
    getLoginUsername,
    getLoginPassword,
    getLoginIsLoading,
    getLoginError,
    loginByUsername
} from 'store/AuthByUserName';

import { DynamicModuleLoader, ReducersList } from 'utils/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'helpers/classNames/classNames';

import { Button } from 'ui/Button/Button';
import { Input } from 'ui/Input/Input';
import { Text } from 'ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
};

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation('login');

    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div
                data-testid="LoginForm"
                className={classNames(s.LoginForm, {}, [className])}
            >
                <Text
                    view={'primary'}
                    className={s.title}
                    text={t('Логин')}
                />
                <Input
                    placeholder={t('Введите ваш логин...')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Text
                    view={'primary'}
                    className={s.title}
                    text={t('Пароль')}
                />
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
                    onClick={onLogin}
                    disabled={isLoading}
                    className={s.btn}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
