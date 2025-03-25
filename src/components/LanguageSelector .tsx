import { useState } from "react";
import { useTranslation } from "react-i18next";


const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false); // Menünün açılıp kapanmasını kontrol et
  const { i18n } = useTranslation();
  
    // Dil seçeneği
    const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // Dili değiştirdikten sonra menüyü kapat
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)} // Menüyü açıp kapat
        className="hover:underline text-white rounded"
      >
        {t("language.language")}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded">
          <ul className="flex flex-col">
            <li>
              <button
                onClick={() => changeLanguage("en")}
                className="w-full p-2 text-left text-gray-800 hover:bg-blue-100"
              >
                EN
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("tr")}
                className="w-full p-2 text-left text-gray-800 hover:bg-red-100"
              >
                TR
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("de")}
                className="w-full p-2 text-left text-gray-800 hover:bg-yellow-100"
              >
                DE
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("nl")}
                className="w-full p-2 text-left text-gray-800 hover:bg-yellow-100"
              >
                NL
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
