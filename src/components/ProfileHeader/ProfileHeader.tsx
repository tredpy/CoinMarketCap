import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
    getProfileReadOnly,
    updateProfileData,
    profileActions
} from 'store/Profile';

import { useAppDispatch } from 'common/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'common/helpers/classNames/classNames';

import { Button } from 'ui/Button/Button';
import { Text } from 'ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
    className?: string
}

export const ProfileHeader = memo((props: ProfileHeaderProps) => {
    const {
        className
    } = props;

    const { t } = useTranslation('profile');

    const readOnly = useSelector(getProfileReadOnly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(s.ProfileHeader, {}, [className])}>
            <Text text={t('Профиль')} size={'L'}/>
            {readOnly
                ? (
                    <Button
                        className={s.edit}
                        view={'border'}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <div className={s.edit}>
                        <Button
                            className={s.btn}
                            view={'border_red'}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            className={s.btn}
                            view={'border'}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                    </div>
                )}
        </div>
    );
});
