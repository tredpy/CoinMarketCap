import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from 'common/helpers/classNames/classNames';

import { useTranslation } from 'react-i18next';

import s from './CurrencyDetailsPage.module.scss';

interface CurrencyPageProps {
    className?: string
}

const CurrencyDetailsPage = memo((props: CurrencyPageProps) => {
    const { className } = props;
    const { t } = useTranslation('currency');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(s.CurrencyPage, {}, [className])}>
                {t('Криптовалюта не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(s.CurrencyPage, {}, [className])}>

        </div>
    );
});

export default CurrencyDetailsPage;
