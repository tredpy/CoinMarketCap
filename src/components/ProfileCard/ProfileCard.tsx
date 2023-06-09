import { memo } from 'react';

import { Profile } from 'store/Profile/model/types/profile';

import { classNames, Mods } from 'common/helpers/classNames/classNames';

import { Loader } from 'ui/Loader/Loader';
import { Avatar } from 'ui/Avatar/Avatar';
import { Input } from 'ui/Input/Input';
import { Text } from 'ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readOnly?: boolean
    onChangeUsername?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readOnly,
        onChangeUsername,
        onChangeAge,
        onChangeCity,
        onChangeAvatar
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(s.ProfileCard, { [s.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(s.ProfileCard, {}, [className, s.error])}>
                <Text
                    view={'error'}
                    size={'L'}
                    text={t('Произошла ошибка при загрузке профиля')}
                    align={'center'}
                />
            </div>
        );
    }

    const mods: Mods = {
        [s.editing]: !readOnly
    };

    return (
        <div className={classNames(s.ProfileCard, mods, [className])}>
            <div className={s.data}>
                <Text
                    text={t('Имя пользователя')}
                    view={'primary'}
                    readOnly={readOnly}
                    className={s.item}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
                <Text
                    text={t('Возраст')}
                    view={'primary'}
                    readOnly={readOnly}
                    className={s.item}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Введите возраст')}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                />
                <Text
                    text={t('Город')}
                    view={'primary'}
                    readOnly={readOnly}
                    className={s.item}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Введите город')}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
                <Text
                    text={t('Аватар')}
                    view={'primary'}
                    readOnly={readOnly}
                    className={s.item}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите сылку на аватар')}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
            </div>
            {data?.avatar && (
                <Avatar src={data?.avatar} className={s.avatar}/>
            )}
        </div>
    );
});
