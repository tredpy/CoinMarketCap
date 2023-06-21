import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import {
    fetchWatchlistCurrencies
} from 'store/Currency/model/services/fetchWatchlistCurrencies/fetchWatchlistCurrencies';
import { useInitialEffect } from 'hooks/useInitialEffect/useInitialEffect';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchWatchlistCurrencies('ethereum'))
        // @ts-ignore
    }, [])

    return (
        <div
            data-testid="MainPage"
        >
            {t('Криптовалюты')}
        </div>
    );
});

export default MainPage;
