import React, { useState, useEffect } from "react";
import DesktopMenu from "../DesktopMenu";
import MobileMenu from "../MobileMenu";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import LanguageSelector from "../LanguageSelector ";

const HomeNavbar: React.FC = () => {
  const [open, setOpen] = useState(false); // Menü açma/kapama durumu
  const [activeLink, setActiveLink] = useState<string | null>(null); // Aktif bağlantıyı tutacak state
  const [showSubMenu, setShowSubMenu] = useState(false); // Alt menü durumu
  const [scrolled, setScrolled] = useState(false); // Kaydırma durumunu takip eden state

  //Dil seçeneği
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Menü durumunu değiştiren fonksiyon
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (link !== "urunlerimiz") {
      setShowSubMenu(false); // 'Ürünlerimiz' dışında tıklanan diğer linklerde menü kapanacak
    }
  };

  // Alt menüyü toggle eden fonksiyon
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  // Menü açma/kapama fonksiyonu
  const toggleMenu = () => {
    setOpen(!open);
  };

  // Kaydırma durumunu kontrol eden useEffect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // 50px'ten fazla kaydırıldığında `scrolled` true olacak
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Olay dinleyicisini temizle
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 h-16 flex items-center justify-between px-8 transition-all duration-300 ${
        scrolled
          ? "bg-nbbg text-white shadow-lg" // Kaydırıldığında opaklık yerine arka plan rengi
          : "bg-nbbg text-white md:bg-opacity-50" // Kaydırılmadığında default renk
      } `} // Sadece md ve üzeri ekranlarda opacity olacak, küçük ekranlarda normal renk
    >
      <div className="flex justify-center items-center h-full">
        <Link to="/">
          <img
            src="/assets/logo3.png"
            alt="Şirket Logosu"
            className="md:w-52  w-40 h-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Menü: Sadece medium ve üzeri ekranlarda görünür */}
      <div className="hidden md:flex ">
        <DesktopMenu
          activeLink={activeLink || ""} // Aktif bağlantı
          handleLinkClick={handleLinkClick} // Link tıklama fonksiyonu
          showSubMenu={showSubMenu} // Alt menü durumu
          toggleSubMenu={toggleSubMenu} // Alt menüyü toggle eden fonksiyon
        />
      </div>

      {/* Mobil Menü İkonu: Sadece küçük ekranlarda (md:hidden) görünür */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobil Menü: Sadece küçük ekranlarda (md:hidden) görünür */}
      <MobileMenu
        open={open} // Menü durumu
        handleLinkClick={handleLinkClick} // Link tıklama fonksiyonu
        showSubMenu={showSubMenu} // Alt menü durumu
        toggleSubMenu={toggleSubMenu} // Alt menüyü toggle eden fonksiyon
        toggleMenu={toggleMenu} // Menü açma/kapama fonksiyonu
      />
    </nav>
  );
};

export default HomeNavbar;
