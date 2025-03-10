import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BackToTopButton from "./components/BackToTopButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./components/ScrollToTop";
import ServicesDetails from "./components/OurServices/ServicesDetails";



const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ServicesDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BackToTopButton />
      <Footer />
    </Router>
  );
};

export default App;
