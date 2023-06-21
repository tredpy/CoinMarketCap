import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'common/hooks/useAppDispatch/useAppDispatch';
import {
    fetchWatchlistCurrencies
} from 'store/Currency/model/services/fetchWatchlistCurrencies/fetchWatchlistCurrencies';
import { useInitialEffect } from 'common/hooks/useInitialEffect/useInitialEffect';

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
