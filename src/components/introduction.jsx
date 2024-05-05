/** @format */

import {
  GradientTexture,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import React, { Suspense } from "react";
import { TextureLoader } from "three";
import Navbar from "./navbar";
import Footer from "./footer";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import {
  Animator,
  Fade,
  MoveOut,
  Sticky,
  Zoom,
  batch,
} from "react-scroll-motion";

function Intro() {
  return (
    <>
      {/* Canvas section */}
      <div className="container h-screen w-screen bg-white fixed top-0 z-0">
        <Canvas camera={{ fov: 55, position: [1, 1, 1] }}>
          <Suspense>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <mesh position={[0, 0, 0]}>
              <sphereBufferGeometry args={[3, 32, 32]} geometry="geometry" />
              <MeshDistortMaterial distort={1}>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={["#458CF8", "#EB8EF4"]} // Colors need to match the number of stops
                  size={2560} // Size is optional, default = 1024
                />
              </MeshDistortMaterial>
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default Intro;
