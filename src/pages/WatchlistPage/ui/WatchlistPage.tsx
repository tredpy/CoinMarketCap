import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { classNames } from 'common/helpers/classNames/classNames';
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

    const navigate = useNavigate()

    const onLogin = useCallback(() => {
        navigate(RoutePath.LOGIN)
    }, [navigate])

    return (
        <div
            data-testid="WatchlistPage"
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
        </div>
    );
});

export default WatchlistPage;
