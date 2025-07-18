import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white text-center py-6">
      <p className="text-sm">&copy; {new Date().getFullYear()} Argany Teknik. All rights reserved.</p>
    </footer>
  );
};

export default Footer;