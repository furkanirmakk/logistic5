import { useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags"; // react-world-flags kütüphanesi

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const getFlagCode = (lang: string) => {
    switch (lang) {
      case "en":
        return "GB"; // veya "US" kullanabilirsin
      case "tr":
        return "TR";
      case "de":
        return "DE";
      case "nl":
        return "NL";
      default:
        return "GB";
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 flex items-center gap-2"
      >
        <Flag code={getFlagCode(i18n.language)} className="w-6 h-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded">
          <ul className="flex flex-col">
            <li>
              <button
                onClick={() => changeLanguage("en")}
                className="w-full p-2 text-left text-gray-800 hover:bg-gray-400 flex items-center gap-2"
              >
                <Flag code="GB" className="w-6 h-4" /> EN
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("tr")}
                className="w-full p-2 text-left text-gray-800 hover:bg-gray-400 flex items-center gap-2"
              >
                <Flag code="TR" className="w-6 h-4" /> TR
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("de")}
                className="w-full p-2 text-left text-gray-800 hover:bg-gray-400 flex items-center gap-2"
              >
                <Flag code="DE" className="w-6 h-4" /> DE
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("nl")}
                className="w-full p-2 text-left text-gray-800 hover:bg-gray-400 flex items-center gap-2"
              >
                <Flag code="NL" className="w-6 h-4" /> NL
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
