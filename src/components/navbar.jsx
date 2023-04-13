/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute flex justify-between py-12 px-12 sticky top-0 ">
      <div className="h-[50px] w-[50px]">
        <Link to="/">
          <span className="font-black text-2xl">&lt;/&gt;</span>
        </Link>
      </div>
      <div className="font-nunito space-x-6 text-[18px] font-semibold">
        <span className="line-through hover:underline">
          <Link to="/about">About</Link>
        </span>
        <span className="line-through hover:underline">
          <Link to="/project">Projects</Link>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
