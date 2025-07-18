import React from "react";

const KEUNGGULAN = [
  {
    icon: "🤝",
    title: "Amanah",
    description: "Telah dipercaya lebih dari 1000 klien di Kantor dan Rumah Pribadi.",
  },
  {
    icon: "👔",
    title: "Profesional & Berpengalaman",
    description: "Dikerjakan tim ahli dan profesional.",
  },
  {
    icon: "🕒",
    title: "Proses Cepat",
    description: "Pengerjaan cepat dan akurat sesuai waktu.",
  },
  {
    icon: "💬",
    title: "Gratis Konsultasi",
    description: "Konsultasikan kepada kami masalah yang Anda alami.",
  },
  {
    icon: "💯",
    title: "Bergaransi",
    description: "100% bergaransi menyelesaikan sesuai keinginan Anda.",
  },
];

const KeunggulanKami = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 md:px-8 lg:px-20" data-aos="fade-left">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-blue-800">
          5 Keuntungan Memakai Jasa Servis Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {KEUNGGULAN.map((item, idx) => (
            <div
              key={idx}
              className="bg-white hover:shadow-lg transition-all rounded-xl p-6 border border-blue-100 shadow-sm flex flex-col items-center text-center h-full "
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg text-blue-800 font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-grey-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeunggulanKami;
