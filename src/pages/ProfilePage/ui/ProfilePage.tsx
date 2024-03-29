import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

import { ProfileHeader } from 'components/ProfileHeader/ProfileHeader';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { ProfileCard } from 'components/ProfileCard/ProfileCard';

import { DynamicModuleLoader, ReducersList } from 'common/utils/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'common/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'common/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'common/helpers/classNames/classNames';
import { RoutePath } from 'common/routes/RouteConfig/RouteConfig';

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
    const { id } = useParams<{ id: string }>();

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

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

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
                <PageWrapper
                    className={classNames('', {}, [className])}
                >
                    <ProfileHeader/>
                    {validateErrors?.length && validateErrors.map((err) => (
                        <Text
                            key={err}
                            view={'error'}
                            text={validateErrorTranslates[err]}
                            className={s.error}
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
                </PageWrapper>
            </DynamicModuleLoader>
        );
    }

    return (
        <PageWrapper
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
        </PageWrapper>
    );
});

export default ProfilePage;
