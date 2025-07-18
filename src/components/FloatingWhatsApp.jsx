import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "6289518761770";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default FloatingWhatsApp;
