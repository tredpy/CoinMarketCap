import { memo } from 'react';

import { useTranslation } from 'react-i18next';

const WatchlistPage = memo(() => {
    const { t } = useTranslation('watchlist');

    return (
        <div
            data-testid="WatchlistPage"
        >
            {t('Избранное')}
        </div>
    );
});

export default WatchlistPage;
