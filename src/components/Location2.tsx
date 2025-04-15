import React from "react";
import { useTranslation } from "react-i18next";

const Location2: React.FC = () => {
  // Dil seçeneği
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 pt-24 flex flex-col lg:flex-row items-center gap-8">
          {/* İletişim Bilgileri */}
          <div className="w-full lg:w-1/2 p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-center lg:text-left h-64 lg:h-96 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {t("adress.warehouse")}
            </h2>
            <p className="text-gray-600">{t("contact.description")}</p>
            <div className="space-y-4 mt-4">
              <p className="text-lg font-medium">
                📍 {t("contact.address")}:{" "}
                <span className="text-gray-700">
                  Nijverheidslaan 1515 3660 OUDSBERGEN
                </span>
              </p>
            </div>
          </div>

          {/* Harita */}
          <div className="w-full lg:w-1/2 h-64 lg:h-96">
            <iframe
              title="Google Maps"
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113454.61907964236!2d5.394238671632563!3d51.07124402126006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0d9e42373033d%3A0xcaf7b355e4d89969!2sNijverheidslaan%201515%2C%203660%20A%2C%20Bel%C3%A7ika!5e0!3m2!1str!2str!4v1744738274784!5m2!1str!2str"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-24 flex flex-col lg:flex-row items-center gap-8">
          {/* İletişim Bilgileri */}
          <div className="w-full lg:w-1/2 p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-center lg:text-left h-64 lg:h-96 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {t("adress.warehouse")}
            </h2>
            <p className="text-gray-600">{t("contact.description")}</p>
            <div className="space-y-4 mt-4">
              <p className="text-lg font-medium">
                📍 {t("contact.address")}:{" "}
                <span className="text-gray-700">
                  MIJNWERKERSLAAN 31 3550 Heusden zolder
                </span>
              </p>
            </div>
          </div>
          {/* Harita */}
          <div className="w-full lg:w-1/2 h-64 lg:h-96">
            <iframe
              title="Google Maps"
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.627473112098!2d5.326819076473884!3d51.04150077171107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1254b15c695f1%3A0xd86ad3d66eada3e1!2sMijnwerkerslaan%2031%2C%203550%20Heusden-Zolder%2C%20Bel%C3%A7ika!5e0!3m2!1str!2str!4v1744738525133!5m2!1str!2str"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location2;
