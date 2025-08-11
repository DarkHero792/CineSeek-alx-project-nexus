import Link from "next/link";
import Button from "../commons/Button";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="h-28 flex items-center bg-[#171D22] px-4 md:px-16 lg:px-44 text-white">
      <div className="flex items-center justify-between w-full">
        {/* Left: Logo container with fixed width */}
        <div className="w-1/3 flex justify-start pl-4"> {/* drifted right */}
          <h2 className="text-xl md:text-4xl font-semibold">
            Cine<span className="text-[#E2D609]">Seek</span>
          </h2>
        </div>

        {/* Center: Nav */}
        <nav className="hidden md:flex w-1/3 justify-center space-x-8">
          <Link
            href="/"
            className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold"
          >
            Home
          </Link>
          <Link
            href="/movies"
            className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold"
          >
            Movies
          </Link>
          <Link
            href="/favorites"
            className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold"
          >
            Favorites
          </Link>
        </nav>

        {/* Right: Sign in buttons */}
        <div className="w-1/3 flex justify-end space-x-4">
          <div className="md:hidden">
            <Button title="Sign in" action={() => router.push("/signup")} />
          </div>
          <div className="hidden md:flex">
            <Button title="Sign in" action={() => router.push("/signup")} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
