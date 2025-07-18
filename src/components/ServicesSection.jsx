import React from "react";

// Ganti path berikut dengan path asli ke file .webp kamu di /public/images/
const services = [
  {
    icon: "/images/AC-icon.webp",
    title: "Service AC",
    desc: "Layanan service AC profesional kami memastikan AC Anda berfungsi optimal dan memberikan udara sejuk di setiap sudut ruangan.",
  },
  {
    icon: "/images/kulkas-icon.webp",
    title: "Service Kulkas",
    desc: "Pastikan kulkas Anda kembali beroperasi optimal dengan layanan service kulkas profesional dan handal dari kami.",
  },
  {
    icon: "/images/mesincuci-icon.webp",
    title: "Service Mesin Cuci",
    desc: "Nikmati pelayanan service mesin cuci berkualitas dan terpercaya untuk menjaga kinerja optimal mesin cuci Anda.",
  },
  {
    icon: "/images/electric.webp",
    title: "Perbaikan Listrik",
    desc: "Dapatkan layanan perbaikan listrik profesional dan handal untuk segala kebutuhan Anda.",
  },
  {
    icon: "/images/handshake.webp",
    title: "Tukar Tambah AC Baru",
    desc: "Dapatkan penawaran menarik untuk menukar AC lama Anda dengan AC baru berperforma tinggi dan hemat energi.",
  },
  {
    icon: "/images/recycle.webp",
    title: "Jual Beli AC Bekas",
    desc: "Temukan penawaran terbaik untuk AC bekas berkualitas dengan harga terjangkau dan segera nikmati kesejukan yang nyaman.",
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-16 px-4 md:px-20 bg-gray-50" data-aos="fade-up">
      <h3 className="text-3xl font-bold text-center text-blue-800 mb-12">Layanan Service Argany Teknik</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-xl shadow hover:shadow-lg transition p-6 flex gap-4 items-start" data-aos="fade-up"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-12 h-12 object-contain"
              loading="lazy"
            />
            <div>
              <h4 className="text-lg font-semibold text-blue-800">{service.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
