import { useTranslation } from 'react-i18next';

const PortfolioPage = () => {
    const { t } = useTranslation('portfolio');
    return (
        <div>
            {t('Портфель')}
        </div>
    );
};

export default PortfolioPage;
