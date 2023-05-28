/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute flex justify-between py-4 px-4 lg:px-8 sticky top-0 w-full bg-white font-main">
      <div className="h-[50px] w-[50px]">
        <Link to="/">
          <span className="font-semibold text-2xl">&#123;/&#125;</span>
        </Link>
      </div>
      <div className=" text-[18px] font-semibold">
        <span className="hover:underline">
          <Link to="/about">Say hi!</Link>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
