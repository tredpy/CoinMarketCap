import { memo } from 'react';

import { profileReducer } from 'entities/Profile';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                data-testid="ProfilePage"
                className={classNames('', {}, [className])}
            >
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
