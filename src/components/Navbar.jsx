const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">ARGANY TEKNIK</h1>
        <nav className="space-x-4 hidden md:flex">
          <a href="#layanan" className="text-gray-800 hover:text-blue-700">Layanan</a>
          <a href="#galeri" className="text-gray-800 hover:text-blue-700">Galeri</a>
          <a href="#tentang" className="text-gray-800 hover:text-blue-700">Tentang Kami</a>
          <a href="#kontak" className="text-gray-800 hover:text-blue-700">Kontak</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;