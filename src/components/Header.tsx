/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-screen py-2 px-4 md:px-[5%] lg:px-[15%]">
      <nav className="flex items-center justify-between">
        <img src="/logo.png" className="" style={{ width: "3rem" }} alt="" />
        {/* links */}
        <div className="flex gap-3">
          <Link href={"/"} className="text-xl text-blue-500">
            Home
          </Link>
          <Link href={"/blog"} className="text-xl text-blue-500">
            Blog
          </Link>
        </div>
        <img src="/moon.svg" className="w-8 cursor-pointer" alt="" />
      </nav>
    </header>
  );
};

export default Header;
