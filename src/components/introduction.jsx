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
      <div className=" fixed top-0 left-0 right-0 w-full h-full bg-white overflow-hidden z-0">
        <Canvas
          camera={{ fov: 55, position: [1, 1, 1] }}
          className="w-full h-full"
        >
          <Suspense>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <mesh position={[0, 0, 0]} className="w-full h-full">
              <sphereGeometry args={[3, 32, 32]} geometry="geometry" />
              <MeshDistortMaterial distort={1}>
                <GradientTexture
                  stops={[0, 1]}
                  colors={["#458CF8", "#EB8EF4"]}
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
