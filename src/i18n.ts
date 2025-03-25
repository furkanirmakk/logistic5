import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // i18next için HTTP backend'i kullanıyoruz (dil dosyalarını yüklemek için)
  .use(LanguageDetector) // Dil algılamayı ekliyoruz (kullanıcının dilini tespit eder)
  .use(initReactI18next) // React için i18next'i başlatıyoruz
  .init({
    fallbackLng: "en", // Dil tespiti yapılamazsa varsayılan dil "en" (İngilizce) olacak
    debug: false, // Hata ayıklama modu kapalı
    interpolation: { escapeValue: false }, // HTML özel karakterlerini escape etmiyoruz
    supportedLngs: ["en", "tr", "de", "nl"], // Desteklediğiniz dillerin listesi
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Dil dosyalarını yükleme yolu
    },
  });

export default i18n;
