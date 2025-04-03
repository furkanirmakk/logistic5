import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "./LanguageSelector ";

interface DesktopMenuProps {
  activeLink: string;
  handleLinkClick: (link: string) => void;
  showSubMenu: boolean;
  toggleSubMenu: () => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  activeLink,
  handleLinkClick,
  showSubMenu,
  toggleSubMenu,
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const navigate = useNavigate(); // Navigate hook'u

  // Ürünler menüsüne tıklanırsa alt menüyü aç/kapat
  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen); // Alt menüyü tersine çevir
  };
  // Dil seçeneği
  const { t } = useTranslation();
  // Alt menü öğesine tıklanırsa menü kapanacak ve hedefe kaydıracak
  const handleSubMenuItemClick = (item: string) => {
    setIsSubMenuOpen(false); // Menü öğesi seçildikten sonra menü kapanacak
    handleLinkClick(item);

    if (item === "hizmetlerimiz1") {
      // Balya makineleri kısmına yönlendirme ve kaydırma işlemi
      navigate("/"); // Home sayfasına yönlendirme
      setTimeout(() => {
        const targetElement = document.getElementById("hizmetlerimiz-1");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
        }
      }, 0); // Yönlendirme sonrası kaydırma işlemi için küçük bir bekleme süresi
    }

    if (item === "hizmetlerimiz2") {
      // Balya makineleri kısmına yönlendirme ve kaydırma işlemi
      navigate("/"); // Home sayfasına yönlendirme
      setTimeout(() => {
        const targetElement = document.getElementById("hizmetlerimiz-2");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
        }
      }, 0); // Yönlendirme sonrası kaydırma işlemi için küçük bir bekleme süresi
    }

    if (item === "hizmetlerimiz3") {
      // Balya makineleri kısmına yönlendirme ve kaydırma işlemi
      navigate("/"); // Home sayfasına yönlendirme
      setTimeout(() => {
        const targetElement = document.getElementById("hizmetlerimiz-3");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
        }
      }, 0); // Yönlendirme sonrası kaydırma işlemi için küçük bir bekleme süresi
    }

    if (item === "hizmetlerimiz4") {
      // Balya makineleri kısmına yönlendirme ve kaydırma işlemi
      navigate("/"); // Home sayfasına yönlendirme
      setTimeout(() => {
        const targetElement = document.getElementById("hizmetlerimiz-4");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
        }
      }, 0); // Yönlendirme sonrası kaydırma işlemi için küçük bir bekleme süresi
    }
    
  };

  return (
    <ul className="flex space-x-6">
      <li>
        <a
          href="/"
          className="hover:underline hover:text-footer"
          onClick={() => handleLinkClick("home")}
        >
          {t("nav.home")}
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="hover:underline hover:text-footer"
          onClick={() => handleLinkClick("about")}
        >
          {t("nav.about")}
        </a>
      </li>
      <li>
        <a
          href="/belgiumWarehouse"
          className="hover:underline hover:text-footer"
          onClick={() => handleLinkClick("belgiumWarehouse")}
        >
          {t("nav.belgiumWarehouse")}
        </a>
      </li>

      {/* Ürünlerimiz Linki */}
      <li className="relative">
        <a
          href="#products"
          className="hover:underline hover:text-footer"
          onClick={(e) => {
            e.preventDefault(); // Linkin sayfayı yenilemesini engelliyoruz
            handleSubMenuToggle(); // Alt menüyü aç/kapat
          }}
        >
          {t("nav.services")}
        </a>

        {/* Alt Menü (Ürünler listesi) */}
        {isSubMenuOpen && (
          <ul className="absolute left-0 mt-2 bg-white  shadow-lg  space-y-2 text-gray-800 w-48 z-20 flex flex-col">
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz1")}
              >
                {t("nav.serviceList.roadTransportation")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz1")}
              >
                {t("nav.serviceList.airTransport")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz1")}
              >
                {t("nav.serviceList.seaTransport")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz2")}
              >
                {t("nav.serviceList.railTransport")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz2")}
              >
                {t("nav.serviceList.multimodalTransport")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz2")}
              >
                {t("nav.serviceList.exhibitionTransport")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz3")}
              >
                {t("nav.serviceList.projectTransport")} 
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz3")}
              >
                {t("nav.serviceList.milkrunTransport")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz3")}
              >
                {t("nav.serviceList.warehousingServices")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz4")}
              >
                {t("nav.serviceList.insuranceServices")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" p-2 pb-0 hover:bg-gray-400 flex items-center"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz4")}
              >
                {t("nav.serviceList.customsServices")}
              </a>
            </li>
            

          </ul>
        )}
      </li>

      <li>
        <a
          href="/contact"
          className="hover:underline hover:text-footer"
          onClick={() => handleLinkClick("contact")}
        >
          {t("nav.contact")}
        </a>
      </li>
      <li>
        <LanguageSelector />
      </li>
    </ul>
  );
};

export default DesktopMenu;
