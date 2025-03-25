import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector ";

interface MobileMenuProps {
  open: boolean;
  handleLinkClick: (link: string) => void;
  toggleMenu: () => void;
  showSubMenu: boolean;
  toggleSubMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  handleLinkClick,
  toggleMenu,
  showSubMenu,
  toggleSubMenu,
}) => {
  const navigate = useNavigate(); // React Router navigate hook'u

  // Dil seçeneği
  const { t } = useTranslation();

  // Alt menü öğesine tıklandığında yapılacak işlemi yöneten fonksiyon
  const handleSubMenuItemClick = (item: string) => {
    if (item === "hizmetlerimiz1") {
      // Home sayfasına yönlendirme ve kaydırma işlemi
      navigate("/"); // Home sayfasına yönlendir
      setTimeout(() => {
        const targetElement = document.getElementById("hizmetlerimiz-1");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
        }
      }, 200); // Sayfa yüklenmeden kaydırma işlemi yapılmaması için küçük bir bekleme süresi ekliyoruz
    } else if (item === "hizmetlerimiz2") {
      // Benzer şekilde diğer ürünler için yönlendirme ve kaydırma yapılabilir
      navigate("/"); // Home sayfasına yönlendir
      setTimeout(() => {
        const targetElement = document.getElementById("hizmetlerimiz-2");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else if (item === "hizmetlerimiz3") {
      // Benzer şekilde diğer ürünler için yönlendirme ve kaydırma yapılabilir
      navigate("/"); // Home sayfasına yönlendir
      setTimeout(() => {
        const targetElement = document.getElementById("hizmetlerimiz-3");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else if (item === "hizmetlerimiz") {
      // Benzer şekilde diğer ürünler için yönlendirme ve kaydırma yapılabilir
      navigate("/"); // Home sayfasına yönlendir
      setTimeout(() => {
        const targetElement = document.getElementById("hizmetlerimiz-4");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
    // Menü kapansın
    toggleMenu();
  };

  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-black p-4 transform transition-transform ease-in-out duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Çarpı butonunu sağa yerleştiriyoruz */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex flex-col space-y-4 mt-10 text-white">
        <a
          href="/"
          onClick={() => {
            handleLinkClick("anasayfa");
            toggleMenu(); // Menü kapansın
          }}
          className="hover:text-white hover:bg-gray-400"
        >
          {t("nav.home")}
        </a>
        <a
          href="/about"
          onClick={() => {
            handleLinkClick("hakkimizda");
            toggleMenu(); // Menü kapansın
          }}
          className="hover:text-white hover:bg-gray-400"
        >
          {t("nav.about")}
        </a>

        <a
          href="/about"
          className="hover:underline"
          onClick={() => handleLinkClick("about")}
        >
          {t("nav.belgiumWarehouse")}
        </a>

        <div className="relative">
          <a
            href="#"
            onClick={() => {
              toggleSubMenu(); // Submenu'yi toggle ediyoruz
            }}
            className="hover:text-white hover:bg-gray-400"
          >
            {t("nav.services")}
          </a>

          {/* Alt Menü */}
          {showSubMenu && (
            <div className="flex flex-col bg-gray-800 text-white p-2 shadow-lg mt-2">
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz1")}
              >
                {t("nav.serviceList.roadTransportation")}
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz1")}
              >
                {t("nav.serviceList.airTransport")}
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz1")}
              >
                {t("nav.serviceList.seaTransport")}
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz2")}
              >
                {t("nav.serviceList.railTransport")}
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz2")}
              >
                {t("nav.serviceList.multimodalTransport")}
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz2")}
              >
                {t("nav.serviceList.exhibitionTransport")}
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz3")}
              >
                {t("nav.serviceList.projectTransport")} 
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz3")}
              >
                {t("nav.serviceList.milkrunTransport")}
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz3")}
              >
                {t("nav.serviceList.warehousingServices")}
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz4")}
              >
                {t("nav.serviceList.insuranceServices")}
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-400"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz4")}
              >
                {t("nav.serviceList.customsServices")}
              </a>
            </div>
          )}
        </div>

        <a
          href="/contact"
          onClick={() => {
            handleLinkClick("iletisim");
            toggleMenu(); // Menü kapansın
          }}
          className="hover:text-white hover:shadow-lg"
        >
          {t("nav.contact")}
        </a>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default MobileMenu;
