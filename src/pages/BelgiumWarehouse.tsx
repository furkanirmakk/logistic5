import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import MailTel from "../components/MailTel";
import BackgroundVideo3 from "../components/BackgroundVideo3";
import { useTranslation } from "react-i18next";
import Location2 from "../components/Location2";

const BelgiumWarehouse: React.FC = () => {
  // Dil seçeneği
  const { t } = useTranslation();
  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />
      <BackgroundVideo3 />
      <Location2 />
      <MailTel />
    </div>
  );
};

export default BelgiumWarehouse;
