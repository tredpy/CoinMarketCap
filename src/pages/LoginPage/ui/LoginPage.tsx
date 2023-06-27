import { memo } from 'react';

import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { LoginForm } from 'components/LoginForm/LoginForm';

import { Text } from 'ui/Text/Text'

import { useTranslation } from 'react-i18next';

import s from './LoginPage.module.scss'

const LoginPage = memo(() => {
    const { t } = useTranslation('login');

    return (
        <PageWrapper
            data-testid="LoginPage"
            className={s.LoginPage}
        >
            <Text text={t('Авторизация')} view={'light'} size={'L'}/>
            <LoginForm/>
        </PageWrapper>
    );
});

export default LoginPage;
