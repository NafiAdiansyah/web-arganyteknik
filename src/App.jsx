import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Benefits from "./components/Benefits"
import Gallery from "./components/Gallery";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import 'aos/dist/aos.css';
import AOS from "aos";

const App = () =>{
  useEffect(()=>{
    AOS.init({
      duration: 1500,
      once: true,
    })
  },[])
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Benefits />
      <Gallery />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;