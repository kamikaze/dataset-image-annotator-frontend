import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import us from './us/translation.json';
import lv from './lv/translation.json';

export const resources = {
  lv: {
    translation: lv
  },
  us: {
    translation: us
  }
};

i18next.use(initReactI18next).init({
  lng: 'us',
  debug: true,
  resources,
});
