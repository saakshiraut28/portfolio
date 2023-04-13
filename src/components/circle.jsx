/** @format */

import { GradientTexture, MeshDistortMaterial } from "@react-three/drei";
import React from "react";

function Circle(props) {
  return (
    <mesh
      rotation={[20, 0, 34]}
      position={[props.x, props.y, props.z]}
      distortion={1.3}
    >
      <sphereBufferGeometry
        attach="geometry"
        args={[props.radius, props.widseg, props.heightseg]}
      />
      <MeshDistortMaterial attach="material" distort={props.distort}>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={["#6500E6", "#FF9292"]} // Colors need to match the number of stops
        />
      </MeshDistortMaterial>
    </mesh>
  );
}

export default Circle;
