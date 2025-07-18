import React from "react";

const ContactSection = () => {
  return (
    <section id="kontak" className="py-16 px-4 md:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10" data-aos="fade-rigth">
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Kontak Kami</h3>
          <p className="text-gray-700 mb-2">Alamat: Alam Pesona Blok U No.27 Krian, Sidoarjo</p>
          <p className="text-gray-700 mb-2">Telepon: 0895-1876-1770</p>
          <p className="text-gray-700 mb-6">Email: arganyteknik@gmail.com</p>
          <a href="https://wa.me/6289518761770" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Hubungi via WhatsApp</a>
        </div>
        <div data-aos="fade-left">
          <iframe
            title="Lokasi Argany Teknik"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.7838971910382!2d112.61085807318706!3d-7.378100072616254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780823daf6163f%3A0xc7112a2483e7e361!2sPerumahan%20Alam%20Pesona%201!5e0!3m2!1sid!2sid!4v1752752553442!5m2!1sid!2sid"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded shadow"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;