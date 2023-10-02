"use client"



import React, { useRef } from 'react';
import Hero from "./../../components/heroj"
import Image from 'next/image';
import { Canvas,useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Float, Stats, OrbitControls } from '@react-three/drei';


function Scene() {
  const myMesh = useRef();
  const gltf = useLoader(FBXLoader, '/blocks.fbx');

  useFrame(({ clock, camera }) => {
    // Calculate a breathing effect
    const t = clock.elapsedTime;
    const breathFactor = 0.04 * Math.sin(t); // Adjust the factor for the breathing speed
    const breathFactor1 = 0.03 * Math.cos(t);

    myMesh.current.rotation.x += breathFactor1 * 0.01;
    myMesh.current.rotation.y -= breathFactor * 0.01;
    camera.position.z -= breathFactor;
    camera.position.y += breathFactor1 ;
  });

  return (
    <group>
      <primitive object={gltf} ref={myMesh} rotation={[-0.1, 2.35, 0.1]} scale={[1, 1, 1]} />
    </group>
  );
}

export default function Home() {
  return (
    <div className="w-screen overflow-hidden mt-24">
        <Hero/>


<div className="flex flex-col md:flex-row item-ceter">
  

      
  <div className="md:w-1/2 w-screen">
  <div className="land2bg w-1/2 h-[406px] -z-10 absolute"></div>
    <Image src="/posts.webp" alt="My image" width={762} height={561} className="h-auto w-full" />
  </div>
  
  <div className="md:w-1/2 text-white p-4 md:p-8">
   
    <p className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-black" style={{
fontSize: '50px',
fontWeight: '400',
lineHeight: '131.523%', /* 65.761px */
letterSpacing: '-3.75px',
}}>
      Effortlessly record and safeguard your creative concepts, from groundbreaking research findings to spontaneous ideas.
    </p>
  </div>
</div>

<div className="flex md:h-screen flex-col md:flex-row mt-24 mb-9 item-ceter">


  <div className="md:w-1/2 absolute text-white p-4 md:p-8">
   
    <p className="text-4xl land3te md:text-5xl text-transparent bg-clip-text bg-gradient-to-tl from-white via-grey-100 to-black " style={{
fontSize: '50px',
fontWeight: '400',
lineHeight: '131.523%', /* 65.761px */
letterSpacing: '-3.75px',
}}>
      Blockchain-backed records stand as your immutable proof, ensuring your ideas remain protected and inviolable.
    </p>
  </div>
  
  <div className="md:-z-[10] md:left-[15%] md:relative overflow-hidden md:top-[-15%] top-[14%] mx-auto w-1/2 h-1/2   md:min-w-[75%] md:h-full select-none">

    
  <div className="land3bg animate-hero-light-1 w-1/2 h-[100%] left-[30%] top-[15%] -z-10 absolute"/>

 

        <Canvas camera={{ fov: 75, position: [280, 90, 70] }}>
          <Scene />
        </Canvas>
      </div>
      </div>





      
    </div>
  );
}
