/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 top-0 flex justify-between px-4 py-4 lg:px-8 font-main border border-slate-200 bg-grey-700 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="">
        <Link to="/#home">
          <span
            data-hover=";)"
            className="font-medium text-2xl trasition-all hover:text-[0px] hover:after:content-[attr(data-hover)] hover:after:text-2xl "
          >
            :)
          </span>
        </Link>
      </div>
      <div className=" text-[18px] font-medium">
        <span className="hover:underline transition-all">
          <Link to="/msg">msg.</Link>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
