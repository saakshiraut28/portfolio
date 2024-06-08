/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="top-0 z-10 fixed flex justify-between border-slate-200 bg-grey-700 bg-opacity-30 shadow-lg backdrop-blur-lg backdrop-filter px-4 lg:px-8 py-4 border w-full font-main">
      <div className="">
        <Link to="/#home">
          <span
            data-hover=";)"
            className="hover:after:content-[attr(data-hover)] font-medium text-2xl hover:after:text-2xl hover:text-[0px] trasition-all"
          >
            :)
          </span>
        </Link>
      </div>
      <div className="gap-5 space-x-3 font-medium text-[18px]">
        <span className="hover:underline transition-all">
          <Link to="/about" className="hover:underline transition-all">
            about.
          </Link> </span><span className="gap-3 hover:underline transition-all">
          <Link to="/project" className="hover:underline transition-all">
            projects.
          </Link> </span><span className="gap-3 hover:underline transition-all">
          <Link to="/msg">msg.</Link> </span>
        <span className="gap-3 hover:underline transition-all">
          <Link
            to="https://medium.com/@saakshiraut28"
            className="hover:underline transition-all"
          >
            writings.
          </Link>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
