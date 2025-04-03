import React from "react";
import { useTranslation } from "react-i18next";

const BackgroundVideo3 = () => {
  // Dil seçeneği
  const { t } = useTranslation();
  const operations = t("belgium.operations", {
    returnObjects: true,
  }) as string[];

  return (
    <div className=" w-full h-screen ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/hk-video4.mp4" // Video dosyasının yolu
        autoPlay
        loop
        muted
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white mt-8 p-6 rounded-md shadow-lg sm:left-1/4 sm:-translate-x-1/2 md:left-1/2 lg:left-1/3 w-auto max-w-4xl min-w-[300px]">
        
        <p className="text-justify text-sm sm:text-sm md:text-md lg:text-lg leading-relaxed">
          {t("belgium.description")}
        </p>
        <ul className="mt-5 text-left text-xs sm:text-sm md:text-md lg:text-lg leading-relaxed list-disc list-inside">
          {operations.map((operation, index) => (
            <li key={index}>{operation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BackgroundVideo3;
