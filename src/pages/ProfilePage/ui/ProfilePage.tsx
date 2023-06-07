import { memo, useEffect } from 'react';

import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';

const reducers: ReducersList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                data-testid="ProfilePage"
                className={classNames('', {}, [className])}
            >
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
