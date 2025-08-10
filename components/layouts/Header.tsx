import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="h-28 flex items-center bg-[#171D22] px-4 md:px-16 lg:px-44 text-white relative">
      {/* Logo container with fixed width to shift it right */}
      <div className="w-1/3 flex justify-start">
        <h2 className="text-xl md:text-4xl font-semibold">
          Cine<span className="text-[#E2D609]">Seek</span>
        </h2>
      </div>

      {/* Centered nav, absolutely centered in the header */}
      <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex space-x-8">
        <Link
          href="/"
          className="hover:text-[#E2D609] text-xl transition-colors duration-300 font-semibold"
        >
          Home
        </Link>
        <Link
          href="/movies"
          className="hover:text-[#E2D609] text-xl transition-colors duration-300 font-semibold"
        >
          Movies
        </Link>
        <Link
          href="/favorites"
          className="hover:text-[#E2D609] text-xl transition-colors duration-300 font-semibold"
        >
          Favorites
        </Link>
      </nav>

      {/* Empty right-side div for balance */}
      <div className="w-1/3" />
    </header>
  );
};

export default Header;
