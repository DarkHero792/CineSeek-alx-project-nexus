import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171D22] text-white py-10 px-6">
      {/* Centered nav */}
      <nav className="flex justify-center space-x-6 mb-6">
        <Link href="/" className="hover:text-[#E2D609] text-lg transition-colors duration-300">
          Home
        </Link>
        <Link href="/movies" className="hover:text-[#E2D609] text-lg transition-colors duration-300">
          Movies
        </Link>
        <Link href="/favorites" className="hover:text-[#E2D609] text-lg transition-colors duration-300">
          Favorites
        </Link>
      </nav>

      {/* Social icons centered */}
      <div className="flex justify-center space-x-4 mb-6">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>

      {/* Footer text perfectly centered */}
      <div className="text-center text-sm text-gray-400">
        <p>&copy; 2025 CineSeek. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
