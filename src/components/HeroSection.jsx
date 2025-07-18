// HeroSection.jsx
import React from "react";
import { PiPhoneCall } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    title: "Service AC Profesional Sidoarjo dan Surabaya",
    desc: "Kami melayani service AC, kulkas, mesin cuci, elektronik, dan jual beli dengan harga bersaing dan bergaransi.",
    img: "/hero-image.webp",
  },
  {
    title: "Teknisi Berpengalaman",
    desc: "Dikerjakan langsung oleh teknisi yang sudah berpengalaman.",
    img: "/hero-image2.webp",
  },
  {
    title: "Layanan Cepat & Bergaransi",
    desc: "Kami siap datang ke lokasi Anda dengan cepat dan garansi pekerjaan.",
    img: "/hero-image3.webp",
  },
];

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative bg-gradient-to-br from-blue-100 via-white to-blue-300 overflow-hidden min-h-[620px] flex items-center px-4 md:px-20">
    <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
  

    {/* Konten Utama */}
    <div className="relative z-10 flex flex-col-reverse md:flex-row items-center w-full gap-8 py-10 md:py-0">
      
      {/* Teks */}
      <div className="md:w-1/2 flex-1 flex flex-col justify-center space-y-6 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-800">
          {slide.title}
        </h2>
        <p className="text-gray-700">{slide.desc}</p>
        <a
          href="https://wa.me/6289518761770"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 self-center md:self-start"
        >
          <PiPhoneCall /> Hubungi Kami
        </a>
      </div>

      {/* Gambar */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="w-[320px] md:w-[480px] aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  
</SwiperSlide>



        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
