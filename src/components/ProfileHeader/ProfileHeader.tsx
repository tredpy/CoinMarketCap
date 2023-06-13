import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getProfileReadOnly, profileActions, updateProfileData } from 'store/Profile';

import { classNames } from 'helpers/classNames/classNames';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';

import { Button } from 'ui/Button/Button';
import { Text } from 'ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
    className?: string
}

export const ProfileHeader = (props: ProfileHeaderProps) => {
    const {
        className
    } = props;

    const { t } = useTranslation('profile');

    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(s.ProfilePageHeader, {}, [className])}>
            <Text text={t('Профиль')} size={'L'}/>
            {readOnly
                ? (
                    <Button
                        className={s.editBtn}
                        view={'border'}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            className={s.editBtn}
                            view={'border_red'}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            className={s.saveBtn}
                            view={'border'}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
        </div>
    );
};
