import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import Slider from "react-slick";
import OurServices from "../components/OurServices/OurServices";

const Home: React.FC = () => {
  const settings = {
    dots: true, // Slaytların altında nokta navigasyonu
    infinite: true, // Sonsuz kaydırma
    speed: 500, // Geçiş hızı
    slidesToShow: 1, // Her seferinde 1 slayt göster
    slidesToScroll: 1, // Her kaydırmada 1 slayt göster
    autoplay: true, // Otomatik oynatma
    autoplaySpeed: 1000, // Her slayt arasında bekleme süresi (ms)
    swipeToSlide: true, // Kaydırma ile geçişi aktif eder
    adaptiveHeight: true, // Yükseklik adaptasyonu
  };

  const services1 = [
    { id: 1, name: "Karayolu Taşımacılığı", imageUrl: "/assets/2.png" },
    { id: 2, name: "Havayolu Taşımacılığı", imageUrl: "/assets/3.png" },
    { id: 3, name: "Denizyolu Taşımacılığı", imageUrl: "/assets/4.png" },
  ];
  const services2 = [
    { id: 4, name: "Demiryolu Taşımacılığı", imageUrl: "/assets/2.png" },
    { id: 5, name: "Multimodel Taşımacılık", imageUrl: "/assets/3.png" },
    { id: 6, name: "Fuar Taşımacılığı", imageUrl: "/assets/4.png" },
  ];
  const services3 = [
    { id: 7, name: "Proje Taşımacılığı ", imageUrl: "/assets/2.png" },
    { id: 8, name: "MilkRun Taşımacılık", imageUrl: "/assets/3.png" },
    { id: 9, name: "Depolama Hizmetleri", imageUrl: "/assets/4.png" },
  ];
  const services4 = [
    { id: 10, name: "Sigorta Hizmetleri", imageUrl: "/assets/2.png" },
    { id: 11, name: "Gümrük Hizmetleri", imageUrl: "/assets/3.png" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <HomeNavbar />
      <div className="flex-1">
        <Slider {...settings}>
          <div>
            <img
              src="/assets/1.png"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/2.png"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/3.png"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/4.png"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
        <div>
          <div
            id="hizmetlerimiz-1"
            className="text-center my-8 pt-20 flex items-center justify-center"
          >
            <div className="w-20 h-1 bg-gray-800 mr-4 rounded"></div>
            <h1 className="text-3xl font-bold text-gray-800">Hizmetlerimiz</h1>
            <div className="w-20 h-1 bg-gray-800 ml-4 rounded"></div>
          </div>

          <OurServices products={services1} />
          <div
            id="hizmetlerimiz-2"
            className="text-center  pt-20 flex items-center justify-center"
          >
            <OurServices products={services2} />
          </div>
          <div
            id="hizmetlerimiz-3"
            className="text-center  pt-20 flex items-center justify-center"
          >
            <OurServices products={services3} />
          </div>
          <div
            id="hizmetlerimiz-4"
            className="text-center  pt-20 flex items-center justify-center"
          >
            <OurServices products={services4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
