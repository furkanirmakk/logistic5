import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
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
  const location = useLocation(); // Aktif sayfanın URL'ini alırız
  const { t } = useTranslation(); // Dil seçeneği

  const menuItems = [
    { path: "/", label: t("nav.home"), key: "anasayfa" },
    { path: "/about", label: t("nav.about"), key: "hakkimizda" },
    {
      path: "/belgiumWarehouse",
      label: t("nav.belgiumWarehouse"),
      key: "belgiumWarehouse",
    },
    { path: "/contact", label: t("nav.contact"), key: "iletisim" },
  ];

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
        {menuItems.map((item) => (
          <a
            key={item.key}
            href={item.path}
            onClick={() => {
              handleLinkClick(item.key);
              toggleMenu();
            }}
            className={`p-2 rounded transition-colors duration-300 ${
              location.pathname === item.path
                ? "bg-gray-400 text-black font-bold"
                : "hover:bg-gray-400 hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}

        <div className="relative">
          <a
            href="#"
            onClick={() => {
              toggleSubMenu(); // Submenu'yi toggle ediyoruz
            }}
            className="p-2 hover:text-black hover:font-bold hover:bg-gray-400"
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
        <div className="p-2 hover:text-black hover:font-bold hover:bg-gray-400">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
