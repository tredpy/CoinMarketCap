import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            data-testid="LangSwitcher"
            className={classNames('', {}, [className])}
            view={'clear'}
            size={'M'}
            onClick={toggleLang}
        >
            {t('Русский')}
        </Button>
    );
});
