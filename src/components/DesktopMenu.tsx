import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          className="hover:underline"
          onClick={() => handleLinkClick("home")}
        >
          Ana Sayfa
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="hover:underline"
          onClick={() => handleLinkClick("about")}
        >
          Hakkımızda
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="hover:underline"
          onClick={() => handleLinkClick("about")}
        >
          Belçika Depomuz
        </a>
      </li>

      {/* Ürünlerimiz Linki */}
      <li className="relative">
        <a
          href="#products"
          className="hover:underline"
          onClick={(e) => {
            e.preventDefault(); // Linkin sayfayı yenilemesini engelliyoruz
            handleSubMenuToggle(); // Alt menüyü aç/kapat
          }}
        >
          Hizmetlerimiz
        </a>

        {/* Alt Menü (Ürünler listesi) */}
        {isSubMenuOpen && (
          <ul className="absolute left-0 mt-2 bg-white shadow-lg p-2 space-y-2 text-black w-48 z-20">
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz1")}
              >
                Karayolu Taşımacılığı
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz1")}
              >
                Havayolu Taşımacılığı 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz1")}
              >
                Denizyolu Taşımacılığı
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz2")}
              >
                Demiryolu Taşımacılığı
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz2")}
              >
                Multimodel Taşımacılık
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz2")}
              >
                Fuar Taşımacılığı
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz3")}
              >
                Proje Taşımacılığı 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz3")}
              >
                MilkRun Taşımacılık
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz3")}
              >
                Depolama Hizmetleri
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz4")}
              >
                Sigorta Hizmetleri
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("hizmetlerimiz4")}
              >
                Gümrük Hizmetleri
              </a>
            </li>
            

          </ul>
        )}
      </li>

      <li>
        <a
          href="/contact"
          className="hover:underline"
          onClick={() => handleLinkClick("contact")}
        >
          İletişim
        </a>
      </li>
    </ul>
  );
};

export default DesktopMenu;
