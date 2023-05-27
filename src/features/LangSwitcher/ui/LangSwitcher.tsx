import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            data-testid="LangSwitcher"
            className={classNames('', {}, [className])}
            view={'clear'}
            size={'m'}
            onClick={toggleLang}
        >
            {t('Русский')}
        </Button>
    );
};
