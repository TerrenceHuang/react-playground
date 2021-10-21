import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// TODO: Separate language files
const resources = {
  en: {
    translation: {
      "Navbar title": "React Playground",
      en: "English",
      "zh-TW": "Chinese",
    },
  },
  "zh-TW": {
    translation: {
      "Navbar title": "React 遊樂場",
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
