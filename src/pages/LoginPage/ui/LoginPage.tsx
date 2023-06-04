import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';

import { LoginForm } from 'features/AuthByUserName';

import s from './LoginPage.module.scss'

const LoginPage = () => {
    const { t } = useTranslation('login');

    return (
        <div
            data-testid="LoginPage"
            className={s.LoginPage}
        >
            <Text text={t('Авторизация')} size={'L'}/>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;
