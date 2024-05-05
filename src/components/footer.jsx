/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between py-3 px-4 lg:px-8 w-full font-main text-[18px] border border-slate-200 bg-grey-700 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
        <div className="flex justify-start">
          <Link
            to="https://medium.com/@saakshiraut28"
            className="hover:underline transition-all"
          >
            writings.
          </Link>
        </div>
        <div className="flex justify-end space-x-4">
          <Link to="/project" className="hover:underline transition-all">
            projects.
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
