/** @format */

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Msg() {
  return (
    <>
      <Navbar />
      <div className="flex h-full w-full justify-center items-center">
        <div className="flex flex-col w-1/2 bg-black px-16 py-16">
          <input
            className="appearance-none block w-full bg-white-200 text-gray-700 border border-black-200  p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 my-4"
            id="grid-last-name"
            type="text"
            placeholder="doe@xyz.abc"
          />
          <textarea
            className="appearance-none block w-full min-h-[300px] bg-white-200 text-gray-700 border border-black-200  p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 my-4"
            id="grid-last-name"
            type="text"
            placeholder="Hello! Enter your text here."
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Msg;
