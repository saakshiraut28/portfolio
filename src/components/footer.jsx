/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container fixed bottom-0 flex w-full h-14 items-center px-8 font-main text-[18px] font-medium bg-white">
        <div className="flex w-full justify-start">
          <Link
            to="https://medium.com/@saakshiraut28"
            className="hover:underline transition-all"
          >
            writings.
          </Link>
        </div>
        <div className="flex w-full justify-end space-x-4  ">
          <Link to="/project" className="hover:underline transition-all">
            work.
          </Link>
          <Link to="/about" className="hover:underline transition-all">
            about.
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
