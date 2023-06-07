import { useSelector } from 'react-redux';

import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { useTranslation } from 'react-i18next';

import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);

    return (
        <div className={classNames(s.ProfileCard, {}, [className])}>
            <div className={s.header}>
                <Text
                    view={'primary'}
                    size={'L'}
                    text={t('Профиль')}
                />
                <Button
                    className={s.editBtn}
                    view={'border'}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={s.data}>
                <Input
                    value={data?.username}
                    placeholder={t('Введите ваше имя')}
                    className={s.input}
                />
            </div>
        </div>
    );
};
