import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import Slider from "react-slick";
import OurServices from "../components/OurServices/OurServices";
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const settings = {
    dots: true, // Slaytların altında nokta navigasyonu
    infinite: true, // Sonsuz kaydırma
    speed: 500, // Geçiş hızı
    slidesToShow: 1, // Her seferinde 1 slayt göster
    slidesToScroll: 1, // Her kaydırmada 1 slayt göster
    autoplay: true, // Otomatik oynatma
    autoplaySpeed: 10000, // Her slayt arasında bekleme süresi (ms)
    swipeToSlide: true, // Kaydırma ile geçişi aktif eder
    adaptiveHeight: false, // Yükseklik adaptasyonu
  };
  
    // Dil seçeneği
    const { t } = useTranslation();

  const services1 = [
    { id: 1, name: t("nav.serviceList.roadTransportation"), imageUrl: "/assets/5.png" },
    { id: 2, name: t("nav.serviceList.airTransport"), imageUrl: "/assets/6.png" },
    { id: 3, name: t("nav.serviceList.seaTransport"), imageUrl: "/assets/7.png" },
  ];
  const services2 = [
    { id: 4, name: t("nav.serviceList.railTransport"), imageUrl: "/assets/5.png" },
    { id: 5, name: t("nav.serviceList.multimodalTransport"), imageUrl: "/assets/6.png" },
    { id: 6, name: t("nav.serviceList.exhibitionTransport"), imageUrl: "/assets/7.png" },
  ];
  const services3 = [
    { id: 7, name: t("nav.serviceList.projectTransport"), imageUrl: "/assets/5.png" },
    { id: 8, name: t("nav.serviceList.milkrunTransport"), imageUrl: "/assets/6.png" },
    { id: 9, name: t("nav.serviceList.warehousingServices"), imageUrl: "/assets/7.png" },
  ];
  const services4 = [
    { id: 10, name: t("nav.serviceList.insuranceServices"), imageUrl: "/assets/5.png" },
    { id: 11, name: t("nav.serviceList.customsServices"), imageUrl: "/assets/6.png" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <HomeNavbar />
      <div className="flex-1 mt-16 md:mt-0">
        <Slider {...settings}>
          
          <div>
            <img
              src="/assets/5.png"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/6.png"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/7.png"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/9.png"
              alt="Slide 4"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/8.png"
              alt="Slide 4"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/10.png"
              alt="Slide 4"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/11.png"
              alt="Slide 4"
              className="w-full h-auto object-cover"
            />
          </div>
        </Slider>
        <div>
          <div
            id="hizmetlerimiz-1"
            className="text-center my-8 md:pt-20 pt-4 flex items-center justify-center"
          >
            <div className="w-20 h-1 bg-gray-800 mr-4 rounded"></div>
            <h1 className="text-3xl font-bold text-gray-800">{t("nav.services")}</h1>
            <div className="w-20 h-1 bg-gray-800 ml-4 rounded"></div>
          </div>

          <OurServices products={services1} />
          <div
            id="hizmetlerimiz-2"
            className="text-center md:pt-20 pt-4  flex items-center justify-center"
          >
            <OurServices products={services2} />
          </div>
          <div
            id="hizmetlerimiz-3"
            className="text-center  md:pt-20 pt-4 flex items-center justify-center"
          >
            <OurServices products={services3} />
          </div>
          <div
            id="hizmetlerimiz-4"
            className="text-center  md:pt-20 pt-4 flex items-center justify-center"
          >
            <OurServices products={services4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
