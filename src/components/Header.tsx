/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import sun from "../../public/sun.svg";

const Header = ({
  setTheme,
  isDarkMode,
}: {
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
}) => {
  const toggleTheme = () => {
    setTheme((prevState) => !prevState);
  };
  return (
    <header className="border-b-2 border-black">
      <nav className=" items-center flex justify-end gap-3 h-12 container">
        <Link href={"/"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
        <button onClick={toggleTheme}>
          <img
            src={isDarkMode ? "/moon.svg" : "/sun.svg"}
            className="w-6"
            alt=""
          />
        </button>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
