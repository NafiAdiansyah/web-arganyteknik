import React from "react";

const images = [
  "/hero-image.webp",
  "/hero-image2.webp",
  "/hero-image3.webp",
  "/hero-image.webp",
  "/hero-image2.webp",
  "/hero-image3.webp",
];

const Gallery = () => {
  return (
    <section id="galeri" className="py-16 px-4 md:px-20 bg-gray-50" data-aos="fade-up">
      <h3 className="text-2xl font-bold text-center text-blue-800 mb-10">
        Galeri Pekerjaan Kami
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-[200px] overflow-hidden rounded shadow hover:scale-105 transition-transform" data-aos="fade-up"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
