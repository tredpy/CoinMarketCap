import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserAuthData } from 'store/User';

import { PageWrapper } from 'components/PageWrapper/PageWrapper';

import { classNames } from 'common/helpers/classNames/classNames';
import { RoutePath } from 'common/routes/RouteConfig/RouteConfig';

import { Button } from 'ui/Button/Button';
import { Text } from 'ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './PortfolioPage.module.scss'

interface PortfolioPageProps {
    className?: string
}

const PortfolioPage = memo(({ className }: PortfolioPageProps) => {
    const { t } = useTranslation('portfolio');

    const authData = useSelector(getUserAuthData)

    const navigate = useNavigate()

    const onLogin = useCallback(() => {
        navigate(RoutePath.LOGIN)
    }, [navigate])

    if (authData) {
        return (
            <PageWrapper>Portfolio</PageWrapper>
        )
    }

    return (
        <PageWrapper
            data-testid="PortfolioPage"
            className={classNames(s.Portfolio, {}, [className])}
        >
            <div className={s.wrapper}>
                <Text
                    view={'primary'}
                    size={'L'}
                    text={t('Зарегистрируйтесь сегодня и создайте')}
                    className={s.text}
                />
                <Text
                    view={'light'}
                    size={'L'}
                    text={t('свой собственный Криптопортфель')}
                    className={s.text}
                />
                <Text
                    view={'dark'}
                    align={'center'}
                    text={t('Отслеживайте свою прибыль, убытки и стоимость портфеля.')}
                    className={s.text}
                />
                <Text
                    view={'dark'}
                    align={'center'}
                    text={t('Делайте все это с помощью нашей простой в использовании платформы.')}
                />
                <div className={s.buttons}>
                    <Button
                        view={'background'}
                        size={'L'}
                        onClick={onLogin}
                        className={s.btn}
                    >
                        {t('Создать Портфель')}
                    </Button>
                    <Button
                        view={'border'}
                        size={'L'}
                        onClick={onLogin}
                        className={s.btn}
                    >
                        {t('Войти')}
                    </Button>
                </div>
            </div>
        </PageWrapper>
    );
});

export default PortfolioPage;
