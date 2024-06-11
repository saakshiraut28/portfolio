/** @format */

import React from "react";
import projectsData from "./projectdata";
import Card from "../cards";
import { Link } from "react-router-dom";

const Ai = () => {
  const otherProjects = projectsData.filter(
    (project) => project.category === "other"
  );

  return (
    <div className="relative inset-0 bg-gradient-to-r from-[#E2E1FF] to-[#FDE1FF] backdrop-opacity-3 md:px-16 lg:px-24 py-10 p-4 h-screen transition-all duration-2000 ease-in-out">
      <div className="flex items-center gap-4 py-4">
        <div className="hover:bg-white hover:bg-opacity-80 px-1 py-1 border border-b-2 rounded-full w-8 h-8 hover:animate-spin">
          <Link to="/project">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </Link>
        </div>
        <div className="font-bold font-main text-center text-xl md:text-4xl">
          <p>Other Projects</p>
        </div>
      </div>
      {otherProjects.length > 0 ? (
        otherProjects.map((project, index) => (
          <div
            key={index}
            className="my-4 animate-slideIn"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Card
              title={project.title}
              desc={project.description}
              tech={project.tech}
              prolink={project.livePreview}
              gitlink={project.githubLink}
            />
          </div>
        ))
      ) : (
        <div className="items-center space-y-2 bg-white bg-opacity-30 shadow-lg my-4 mt-8 px-4 md:px-8 lg:px-16 py-8 border border-b-2 rounded-lg w-full font-main text-black text-center text-xl leading-loose">
          I'm sorry. This section is a bit empty. 😞
          <br />
          I've been feeling a little lazy these days.
        </div>
      )}
    </div>
  );
};

export default Ai;
