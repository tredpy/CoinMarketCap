import { useTranslation } from 'react-i18next';

import { LoginForm } from 'features/AuthByUserName';

const LoginPage = () => {
    const { t } = useTranslation('login');

    return (
        <div
            data-testid="LoginPage"
        >
            {t('Вход')}
            <LoginForm/>
        </div>
    );
};

export default LoginPage;
