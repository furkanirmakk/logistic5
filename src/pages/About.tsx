import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import MailTel from "../components/MailTel";
import BackgroundVideo2 from "../components/BackgroundVideo2";

const About: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />
      <BackgroundVideo2 />
      <MailTel />
    </div>
  );
};

export default About;
