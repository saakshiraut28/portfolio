/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MiniCard from "../components/minicard";

function Projects() {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ cardsLoaded, setCardsLoaded ] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const timer = setTimeout(() => {
      setCardsLoaded(true);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className={ `relative h-screen inset-0 transition-all duration-2000 ease-in-out ${isLoaded ? 'w-full h-full bg-[#A9A7FF]' : 'w-0 h-full'}` }>
      <Navbar />
      { isLoaded && cardsLoaded ? (
        <div className="flex justify-center items-center">
          <div className="gap-4 grid lg:grid-cols-3 my-20">
            <div className="cursor-pointer">
              <MiniCard title="Web3 Projects" desc="Collection of all my Web3 projects 🫨" />
            </div>
            <div className="cursor-pointer">
              <MiniCard title="Web2 Projects" desc="Checkout web development projects. 🕸️" />
            </div>
            <div className="cursor-pointer">
              <MiniCard title="Other Projects" desc="Projects related to AI & ML, and so on... 🤖" />
            </div>
          </div>
        </div>
      ) : null }
    </div>
  );
}

export default Projects;
