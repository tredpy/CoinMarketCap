import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { PageWrapper } from 'components/PageWrapper/PageWrapper';

import { classNames } from 'common/helpers/classNames/classNames';

import s from './CurrencyDetailsPage.module.scss';

interface CurrencyPageProps {
    className?: string
}

const CurrencyDetailsPage = memo((props: CurrencyPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <PageWrapper className={classNames(s.CurrencyDetailsPage, {}, [className])}>
            <p>CurrencyDetailsPage</p>
        </PageWrapper>
    );
});

export default CurrencyDetailsPage;
