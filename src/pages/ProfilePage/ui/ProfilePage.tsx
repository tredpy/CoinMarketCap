import { memo, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ProfileHeader } from 'components/ProfileHeader/ProfileHeader';
import { ProfileCard } from 'components/ProfileCard/ProfileCard';

import { getUserAuthData } from 'store/User';
import { ValidateProfileError } from 'store/Profile/model/types/profile';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateErrors,
    profileActions,
    profileReducer
} from 'store/Profile';

import { DynamicModuleLoader, ReducersList } from 'utils/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'helpers/classNames/classNames';
import { RoutePath } from 'routes/RouteConfig/RouteConfig';

import { Button } from 'ui/Button/Button';
import { Text } from 'ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './ProfilePage.module.scss'

const reducers: ReducersList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData)

    const navigate = useNavigate()

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.NO_DATA]: t('Заполните все поля'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Укажите имя пользователя'),
        [ValidateProfileError.INCORRECT_CITY]: t('Укажите ваш город'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении')
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onLogin = useCallback(() => {
        navigate(RoutePath.LOGIN)
    }, [navigate])

    if (authData) {
        return (
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div
                    data-testid="ProfilePage"
                    className={classNames('', {}, [className])}
                >
                    <ProfileHeader/>
                    {validateErrors?.length && validateErrors.map((err) => (
                        <Text
                            key={err}
                            view={'error'}
                            text={validateErrorTranslates[err]}
                        />
                    ))}
                    <ProfileCard
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        readOnly={readOnly}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeUsername={onChangeUsername}
                        onChangeAvatar={onChangeAvatar}
                    />
                </div>
            </DynamicModuleLoader>
        );
    }

    return (
        <div
            data-testid="ProfilePage"
            className={classNames(s.Profile, {}, [className])}
        >
            <div className={s.wrapper}>
                <Text
                    view={'primary'}
                    size={'L'}
                    text={t('Зарегистрируйтесь сегодня и создайте')}
                    className={s.text}
                />
                <Text
                    view={'light'}
                    size={'L'}
                    text={t('свой собственный Профиль')}
                    className={s.text}
                />
                <Text
                    view={'dark'}
                    align={'center'}
                    text={t('Отслеживайте криптовалюту. Ведите собственный портфель.')}
                    className={s.text}
                />
                <Text
                    view={'dark'}
                    align={'center'}
                    text={t('Делайте все это с помощью нашей простой в использовании платформы.')}
                />
                <div className={s.buttons}>
                    <Button
                        view={'background'}
                        size={'L'}
                        onClick={onLogin}
                        className={s.btn}
                    >
                        {t('Создать Профиль')}
                    </Button>
                    <Button
                        view={'border'}
                        size={'L'}
                        onClick={onLogin}
                        className={s.btn}
                    >
                        {t('Войти')}
                    </Button>
                </div>
            </div>
        </div>
    );
});

export default ProfilePage;
