import React from "react";
import { useTranslation } from "react-i18next";

const Location: React.FC = () => {
  // Dil seçeneği
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 pt-24 flex flex-col lg:flex-row items-center gap-8">
          {/* İletişim Bilgileri */}
          <div className="w-full lg:w-1/2 p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-center lg:text-left h-[30rem] lg:h-96 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {t("about.contact")}
            </h2>
            <p className="text-gray-600">{t("contact.description")}</p>
            <div className="space-y-4 mt-4">
              <p className="text-lg font-medium">
                📞 {t("contact.tel")}:{" "}
                <span className="text-gray-700">+90 0532 248 45 86</span>
              </p>
              <p className="text-lg font-medium">
                📧 {t("contact.mail")}:{" "}
                <span className="text-gray-700">cemumut23@gmail.com</span>
              </p>
              <p className="text-lg font-medium">
                📍 {t("contact.address")}:{" "}
                <span className="text-gray-700">
                  MECİDİYE MAH. DEREBOYU CAD. MÜMİN APT. NO: 51 İÇ KAPI NO: 3
                  BEŞİKTAŞ/ İSTANBUL
                </span>
              </p>
            </div>
          </div>

          {/* Harita */}
          <div className="w-full lg:w-1/2 h-64 lg:h-96">
            <iframe
              title="Google Maps"
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48868.40609162573!2d28.9783597!3d41.008238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab79053b10d8b%3A0x4a6b1dddef80e57!2sİstanbul!5e0!3m2!1str!2str!4v1710000000000"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
