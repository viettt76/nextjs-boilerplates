import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const NS = ['auth', 'common'];

let userLang = 'vi';
if (typeof window !== 'undefined') {
    userLang = localStorage.getItem('i18nConfig') || 'vi';
}

i18n.use(resourcesToBackend((lng: string, ns: string) => import(`../../locales/${lng}/${ns}.json`)))
    .use(initReactI18next)
    .init({
        lng: userLang,
        fallbackLng: 'vi',
        ns: NS,
        defaultNS: 'common',
        interpolation: { escapeValue: false },
    });

export default i18n;
