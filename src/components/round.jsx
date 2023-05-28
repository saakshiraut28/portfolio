/** @format */

import { GradientTexture, MeshDistortMaterial } from "@react-three/drei";
import React from "react";

function Round(props) {
  return (
    <mesh rotation={[20, 0, 34]} position={[props.x, props.y, props.z]}>
      <circleBufferGeometry
        attach="geometry"
        args={[props.radius, props.widseg]}
      />
      <MeshDistortMaterial attach="material" distort={props.distort} />
    </mesh>
  );
}

export default Round;
