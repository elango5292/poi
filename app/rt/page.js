"use client"

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

// Import the necessary geometries and materials from react-three-fiber
import { Box } from '@react-three/drei';

const ThreeFiberCubeCard = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 0, 3] }}>
    
        <Suspense fallback={<Html>Loading...</Html>}>
        <>
      <ambientLight />
      position={[0, 20, 10]}
      <mesh rotation={[0, 10, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={"#6be092"} />
      </mesh>
    </>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeFiberCubeCard;
