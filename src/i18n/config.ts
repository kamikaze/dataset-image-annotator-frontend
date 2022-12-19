import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import lv from './lv/translation.json';

export const resources = {
  lv: {
    translation: lv
  },
  en: {
    translation: en
  }
};

i18next.use(initReactI18next).init({
  lng: 'lv',
  debug: true,
  resources,
});
