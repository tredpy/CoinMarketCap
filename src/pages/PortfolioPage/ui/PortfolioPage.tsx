import { memo } from 'react';

import { useTranslation } from 'react-i18next';

const PortfolioPage = memo(() => {
    const { t } = useTranslation('portfolio');

    return (
        <div
            data-testid="PortfolioPage"
        >
            {t('Портфель')}
        </div>
    );
});

export default PortfolioPage;
