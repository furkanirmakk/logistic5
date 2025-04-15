import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import MailTel from "../components/MailTel";
import { useTranslation } from "react-i18next";
import Location from "../components/Location";

const Contact: React.FC = () => {
  // Dil seçeneği
  const { t } = useTranslation();

  return (
    <div>
      <HomeNavbar />
      <div className="bg-gray-100">
        <Location />
        <MailTel />
      </div>
    </div>
  );
};

export default Contact;
