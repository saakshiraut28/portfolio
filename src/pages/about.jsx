/** @format */

import React, { useState, useEffect } from "react";
import Resume from "../assets/Saakshi_Resume_wo_Number.pdf";
import "./css/about.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import {
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";

let text = "saakshiraut28@gmail.com";

function About() {
  const [ isCopy, setIsCopy ] = useState(false);
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  // useEffect(() => {
  //   const t1 = gsap.timeline();
  //   t1.from(".para", {
  //     y: 320,
  //     ease: "power4.out",
  //     delay: 1,
  //     duration: 1.8,
  //     stagger: {
  //       amount: 0.8,
  //     },
  //   });
  // });

  return (<React.Fragment>
    <motion.div
      className="text-black"
      initial={ { width: 0 } }
      animate={ { width: "100%" } }
      exit={ { x: window.innerWidth, transition: { duration: 3 } } }
    >
      <div className="relative h-screen">
        <Canvas camera={ { fov: 15, position: [ -2, 10, 10 ] } }>
          <OrbitControls enableZoom={ false } />
          <ambientLight />
          <mesh position={ [ 1, 1, 1 ] }>
            <sphereBufferGeometry args={ [ 0.8, 64, 64 ] } />
            <MeshDistortMaterial speed={ 2.5 } distort={ 0.8 }>
              <GradientTexture
                stops={ [ 0, 1 ] } // As many stops as you want
                colors={ [ "#458CF8", "#EB8EF4" ] } // Colors need to match the number of stops
                size={ 1024 } // Size is optional, default = 1024
              />
            </MeshDistortMaterial>
          </mesh>
          <mesh position={ [ 3, 1, 0 ] }>
            <sphereBufferGeometry args={ [ 0.5, 64, 64 ] } />
            <MeshDistortMaterial speed={ 2 } distort={ 0.9 }>
              <GradientTexture
                stops={ [ 0, 1 ] } // As many stops as you want
                colors={ [ "#458CF8", "#EB8EF4" ] } // Colors need to match the number of stops
                size={ 1024 } // Size is optional, default = 1024
              />
            </MeshDistortMaterial>
          </mesh>
          <mesh position={ [ 3, -2, 0 ] }>
            <sphereBufferGeometry args={ [ 0.5, 64, 64 ] } />
            <MeshDistortMaterial speed={ 3 } distort={ 0.9 }>
              <GradientTexture
                stops={ [ 0, 1 ] } // As many stops as you want
                colors={ [ "#458CF8", "#EB8EF4" ] } // Colors need to match the number of stops
                size={ 1024 } // Size is optional, default = 1024
              />
            </MeshDistortMaterial>
          </mesh>
        </Canvas>
      </div>
      <div className="top-[100px] absolute">
        <Navbar />

        <div className="px-10 lg:px-20 font-main overflow-y-hidden container">
          {/* TITLE */ }
          <div className="flex lg:justify-end w-full para title">
            <span className="font-semibold text-3xl">ABOUT</span>
            <br />
          </div>
          <div className="flex lg:justify-end w-full para title2">
            <hr className="border-0 bg-black my-4 w-1/2 h-0.5" />
            <br />
          </div>
          {/* INTRODUCTION */ }
          <div className="flex lg:px-20 py-14">
            <span className="space-y-2 auto-type lg:w-2/3 font-regular text-xl md:text-2xl leading-relaxed overflow-hidden intro">
              <p className="pb-3 overflow-hidden para">
                Hello, World! I am Saakshi currently pursuing Computer
                Engineering at Usha Mittal Institute of Technology, situated in
                Mumbai, India.{ " " }
              </p>

              <p className="pb-3 overflow-hidden para">
                I design and create web applications, contribute to open-source
                projects, and write about tech.
              </p>
              <p className="overflow-hidden para">
                PS: I believe that aliens do exist 👽.
              </p>
              <p className="flex md:flex-row flex-col md:space-x-4 my-4 lg:px-20 lg:pb-24 overflow-hidden para">
                <a href={ Resume } target="_blank">
                  <button
                    data-hover="Download"
                    className="hover:after:content-[attr(data-hover)] hover:bg-gradient-to-r hover:from-[#458CF8] hover:to-[#EB8EF4] shadow-lg my-4 py-1 border rounded-full w-64 text-[17px] text-center md:text-[17px] md:hover:after:text-[17px] hover:after:text-[17px] hover:text-white hover:text-[0px]"
                  >
                    Resume
                  </button>
                </a>
                <button
                  data-hover="Copy to clipboard"
                  className="hover:after:content-[attr(data-hover)] hover:bg-gradient-to-r hover:from-[#458CF8] hover:to-[#EB8EF4] shadow-lg my-4 py-1 border rounded-full w-64 text-[20px] text-center md:text-[17px] md:hover:after:text-[17px] hover:after:text-[17px] hover:text-white hover:text-[0px]"
                  onClick={ copyContent }
                >
                  { !isCopy ? (
                    <a href="#" id="myText">
                      saakshiraut28@gmail.com
                    </a>
                  ) : (
                    <a href="#" id="myText">
                      Copied !!
                    </a>
                  ) }
                </button>
              </p>
            </span>
          </div>

          {/* LAST LINES */ }
          <div className="md:block hidden mt-9">
            <div className="space-y-1.5 grid w-full title2">
              <hr className="border-0 bg-black w-full h-0.5" />
              <hr className="border-0 bg-black w-3/4 h-0.5" />
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </motion.div></React.Fragment>
  );
}

export default About;
