import React from "react";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-16 px-4 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="md:w-1/2" data-aos="fade-rigth">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Tentang Argany Teknik</h3>
          <p className="text-gray-700 mb-4">
            Argany Teknik adalah layanan service elektronik terpercaya di Sidoarjo dengan pengalaman selama bertahun-tahun.
            Kami menyediakan solusi perbaikan AC, kulkas, mesin cuci, hingga alat elektronik lainnya dengan teknisi berpengalaman.
          </p>
          <p className="text-gray-700">
            Kepuasan pelanggan adalah prioritas kami. Kami memberikan layanan cepat, jujur, transparan, dan bergaransi.
          </p>
        </div>
        <div className="md:w-1/2" data-aos="fade-left">
          <img src="/logo-argany.webp" alt="Tentang Kami" className="rounded shadow-lg hover:scale-105 transition-transform" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;