import { memo } from 'react';

import { useTranslation } from 'react-i18next';

const CurrencyPage = memo(() => {
    const { t } = useTranslation('currency');

    return (
        <div
            data-testid="CurrencyPage"
        >
            {t('Инфо')}
        </div>
    );
});

export default CurrencyPage;
