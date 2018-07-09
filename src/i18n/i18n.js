import I18n from 'react-native-i18n';
import en from './locales/en';
import zh from './locales/zh';

I18n.defaultLocale = "en";
I18n.fallbacks = true;

I18n.translations = {
  en,
  zh
};

export default I18n;