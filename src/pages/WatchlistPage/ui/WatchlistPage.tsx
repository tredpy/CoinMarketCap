import { useTranslation } from 'react-i18next';

const WatchlistPage = () => {
    const { t } = useTranslation('watchlist');
    return (
        <div
            data-testid="WatchlistPage"
        >
            {t('Избранное')}
        </div>
    );
};

export default WatchlistPage;
