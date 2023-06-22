import { memo } from 'react';

import {
    fetchWatchlistCurrencies
} from 'store/Currency/model/services/fetchWatchlistCurrencies/fetchWatchlistCurrencies';

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
        <div
            data-testid="CurrenciesPage"
        >
            {t('Криптовалюты')}
        </div>
    );
});

export default CurrenciesPage;
