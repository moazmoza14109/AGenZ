import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

// ← اقرأ اللغة المحفوظة، لو مفيش خد "ar" default
const savedLang = localStorage.getItem("lang") || "ar";

i18n.use(initReactI18next).init({
  lng: savedLang,
  fallbackLng: "en",
  debug: import.meta.env.DEV,
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
