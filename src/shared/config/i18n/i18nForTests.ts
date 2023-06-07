import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

void i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,
        interpolation: {
            escapeValue: false
        },
        resources: { ru: { translations: {} } },
        returnNull: false
    });

export default i18n;
