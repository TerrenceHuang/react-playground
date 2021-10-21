import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// TODO: Separate language files
const resources = {
  en: {
    translation: {
      "App Component title": "App Component",
      en: "English",
      "zh-TW": "Chinese",
    },
  },
  "zh-TW": {
    translation: {
      "App Component title": "應用元件",
      en: "英文",
      "zh-TW": "中文",
    },
  },
};

i18n
  // TODO: Make sure LanguageDetector works,
  // it can save change to storage and keep setting when reload,
  // but seems not default to browser setting now
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
