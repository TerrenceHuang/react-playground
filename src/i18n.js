import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "App Component title": "App Component",
    },
  },
  "zh-TW": {
    translation: {
      "App Component title": "應用元件",
    },
  },
};

i18n
  // TODO: Make sure LanguageDetector works, seems not default to browser setting now
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
