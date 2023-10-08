"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';


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
        camera.position.y += breathFactor1;
    });

    return (
        <group>
            <primitive object={gltf} ref={myMesh} rotation={[-0.1, 2.35, 0.1]} scale={[1, 1, 1]} />
        </group>
    );
}


export default function hero2() {
    return (
        <div >

<section class=" m-5  mt-4 md:mt-0 grid grid-cols-1 py-1 px-1 rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-white/10 md:ring-0 items-center justify-items-center gap-0 mt-1 md:grid-cols-2">
    <div className="pb-9 mr-4 pt-24 md:h-auto md:w-auto land2bg  bg-opacity-10"> 
    {/* <div className="land2bg w-1/2 h-[80vh] absolute -z-10 p-5"/> land2bg */}
    <Image src="/posts.webp" alt="My image" style={{ transform: 'rotate(-15.235deg)' }}  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" className='w-100 mx-1 h-100' width={450} height={50} /></div>

<div className="flex-col md:pr-[10%]"><h1 className="md:text-6xl text-4xl font-bold p-3 m-1 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999]">Record anything</h1><p className="p-3 m-1 mr-4 land3te text-2xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-black">
      Effortlessly record and safeguard your creative concepts, from groundbreaking research findings to spontaneous ideas.
    </p></div>
</section>


<section class="grid grid-cols-1 md:mt-0 mt-12 items-center justify-items-center m-5 gap-0  md:grid-cols-2 rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-white/10 md:ring-0">

<div className="flex-col md:pl-[15%]"><h1 className="md:text-6xl text-4xl font-bold p-3 m-1 tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-white to-[#999999]">Immutable Proof of Ownership</h1><p className="p-3 m-1 ml-1 land3te text-2xl font-light text-transparent bg-clip-text bg-gradient-to-tl from-white to-black">
Blockchain-backed records stand as your immutable proof, ensuring your ideas remain protected.
    </p></div>
<div className="w-screen md:top-[0%] top-[14%] py-4 h-[35vh] md:h-[70vh] select-none">

    
  <div className="land3bg animate-hero-light-1 w-full md:w-1/2 h-[80%] md:left-[25%] top-[15%] -z-10 relative"/>

 

        <Canvas  className=" z-[20]  w-auto h-full -left-[10%] md:-left-[4%] top-[-80%] relative" camera={{ fov: 75, position: [250, 90, 70] }}>
          <Scene />
        </Canvas>
      </div>
</section>

        </div>





    )
}