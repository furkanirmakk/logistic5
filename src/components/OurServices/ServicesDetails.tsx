import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HomeNavbar from "../Navbar/HomeNavbar";
import { useTranslation } from "react-i18next";

const ServicesDetails: React.FC = () => {
  interface Product {
    id: number;
    name: string;
    description: string;
    images: string[];
  }

  // Dil seçeneği
  const { t } = useTranslation();

  const products: Product[] = [
    {
      id: 1,
      name: t("nav.serviceList.roadTransportation"),
      description: t("services1.description"),
      images: ["/assets/service photos/road2.jpg"],
    },
    {
      id: 2,
      name: t("nav.serviceList.airTransport"),
      description: t("services2.description"),
      images: ["/assets/service photos/air2.jpg"],
    },
    {
      id: 3,
      name: t("nav.serviceList.seaTransport"),
      description:t("services3.description") ,
      images: ["/assets/service photos/sea2.jpg"],
    },
    {
      id: 4,
      name: t("nav.serviceList.railTransport"),
      description: t("services4.description"),
      images: ["/assets/service photos/rail2.jpg"],
    },
    {
      id: 5,
      name: t("nav.serviceList.multimodalTransport"),
      description: t("services5.description"),
      images: ["/assets/service photos/multimodal2.jpg"],
    },
    {
      id: 6,
      name: t("nav.serviceList.exhibitionTransport"),
      description: t("services6.description"),
      images: ["/assets/service photos/exhibition2.jpg"],
    },
    {
      id: 7,
      name: t("nav.serviceList.projectTransport"),
      description: t("services7.description"),
      images: ["/assets/service photos/project2.jpg"],
    },
    {
      id: 8,
      name: t("nav.serviceList.milkrunTransport"),
      description: t("services8.description"),
      images: ["/assets/service photos/milkrun2.jpg"],
    },
    {
      id: 9,
      name: t("nav.serviceList.warehousingServices"),
      description: t("services9.description"),
      images: ["/assets/service photos/warehouse2.jpg"],
    },
    {
      id: 10,
      name: t("nav.serviceList.insuranceServices"),
      description: t("services10.description"),
      images: ["/assets/service photos/insurance2.jpg"],
    },
    {
      id: 11,
      name: t("nav.serviceList.customsServices"),
      description: t("services11.description"),
      images: ["/assets/service photos/customs2.jpg"],
    },

    // Diğer ürünler...
  ];

  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<string>("");

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">Ürün bulunamadı!</h1>
      </div>
    );
  }

  return (
    <div>
      <HomeNavbar />
      <div className="p-4 sm:p-8 lg:p-16">
        <div className="flex items-center justify-center">
          <div className="w-32 h-1 bg-gray-800 ml-4 rounded"></div>
          <h1 className="text-4xl p-16 text-center font-bold text-gray-800 ">
            {product.name}
          </h1>
          <div className="w-32 h-1 bg-gray-800 mr-4 rounded"></div>
        </div>

        {/* Slayt gösterisi kısmı */}
        <div className="relative w-[100%] sm:w-[85%] md:w-[70%] xl:w-[60%] mx-auto">
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 border-2 border-gray-600">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 p-6 mt-8 bg-gradient-to-r from-[#A8782E] via-[#D1A54C] to-[#D89A45] rounded-xl shadow-lg">
          {/* Ürün açıklaması */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-lg text-gray-800 mt-6 max-w-lg">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
