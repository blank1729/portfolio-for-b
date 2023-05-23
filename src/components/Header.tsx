/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-white font-bold text-xl">
          My Portfolio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
