import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutePath } from 'shared/config/routes/routes';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './PortfolioPage.module.scss'

interface PortfolioPageProps {
    className?: string
}

const PortfolioPage = memo(({ className }: PortfolioPageProps) => {
    const { t } = useTranslation('portfolio');

    const navigate = useNavigate()

    const onLogin = useCallback(() => {
        navigate(RoutePath.LOGIN)
    }, [navigate])

    return (
        <div
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
        </div>
    );
});

export default PortfolioPage;
