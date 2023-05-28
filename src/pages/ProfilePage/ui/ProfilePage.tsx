import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
    const { t } = useTranslation('profile');

    return (
        <div
            data-testid="ProfilePage"
        >
            {t('Профиль')}
        </div>
    );
};

export default ProfilePage;
