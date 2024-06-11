/** @format */

import React, { Component, useEffect } from "react";
import Burger from "../assets/images/Burger-Builder.png";
import Cgs from "../assets/images/CGS.png";
import Oide from "../assets/images/Scryptn.png";
import Repo from "../assets/icons/Repository.png";
import Preview from "../assets/icons/Code.png";
import Overlay from "../assets/images/overlay.png";
import hoverEffect from "hover-effect";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div
      className={`flex-rows items-center lg:items-start bg-white bg-opacity-30 shadow-lg my-4 px-4 md:px-8 lg:px-16 py-8 border border-b-2 rounded-lg w-full font-main ${props.classname}`}
    >
      <p className="py-2 font-semibold text-xl md:text-4xl underline">
        {props.title}
      </p>
      <p className="font-medium md:text-xl">{props.desc}</p>
      <div className="bg-slate-300 my-2 px-3 py-1 rounded-full w-fit">
        {props.tech}
      </div>
      <div className="flex gap-2">
        <div className="w-6 h-6">
          <Link to={props.prolink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:stroke-indigo-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
              />
            </svg>
          </Link>
        </div>
        <div className="w-6 h-6">
          <Link to={props.gitlink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:stroke-indigo-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
