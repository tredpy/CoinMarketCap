import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUserAuthData } from 'store/User';

import { classNames } from 'common/helpers/classNames/classNames';

import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { RoutePath } from 'common/routes/RouteConfig/RouteConfig';

import { Button } from 'ui/Button/Button';
import { Text } from 'ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './WatchlistPage.module.scss'

interface WatchlistPageProps {
    className?: string
}

const WatchlistPage = memo(({ className }: WatchlistPageProps) => {
    const { t } = useTranslation('watchlist');

    const authData = useSelector(getUserAuthData)

    const navigate = useNavigate()

    const onLogin = useCallback(() => {
        navigate(RoutePath.LOGIN)
    }, [navigate])

    if (authData) {
        return (
            <PageWrapper>Watchlist</PageWrapper>
        )
    }

    return (
        <PageWrapper
            className={classNames(s.Watchlist, {}, [className])}
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
                    text={t('свой собственный список Избранных криптовалют')}
                    className={s.text}
                />
                <Text
                    view={'dark'}
                    align={'center'}
                    text={t('Просматривайте графики. Отслеживайте прибыль и убытки.')}
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
                        {t('Создать Список')}
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

export default WatchlistPage;
