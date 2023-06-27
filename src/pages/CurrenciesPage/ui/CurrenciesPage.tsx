import { memo } from 'react';

import {
    fetchWatchlistCurrencies
} from 'store/Currency/model/services/fetchWatchlistCurrencies/fetchWatchlistCurrencies';

import { PageWrapper } from 'components/PageWrapper/PageWrapper';

import { useInitialEffect } from 'common/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'common/hooks/useAppDispatch/useAppDispatch';

import { useTranslation } from 'react-i18next';

const CurrenciesPage = memo(() => {
    const { t } = useTranslation('main');

    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchWatchlistCurrencies('ethereum'))
        // @ts-ignore
    }, [])

    return (
        <PageWrapper>
            {t('Криптовалюты')}
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
            <div>Q</div>
        </PageWrapper>
    );
});

export default CurrenciesPage;
