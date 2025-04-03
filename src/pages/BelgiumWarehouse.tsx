import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import MailTel from "../components/MailTel";
import BackgroundVideo3 from "../components/BackgroundVideo3";

const BelgiumWarehouse: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />
      <BackgroundVideo3 />
      <MailTel />
    </div>
  );
};

export default BelgiumWarehouse;
