import { createI18n } from 'vue-i18n';

import en from '@/i18n/locales/en.json';
import es from '@/i18n/locales/es.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'es',
  messages: {
    en,
    es
  },
});

export default i18n;