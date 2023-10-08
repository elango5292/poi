"use client"

import Link from 'next/link'
import Hero from "./../components/heroj"

import Hero2 from "./../components/hero2"
import Hero3 from "./../components/hero3"
import Footer from "./../components/footer"
import React, { useRef } from 'react';
import Image from 'next/image';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';


export default function Home() {

    return (
      <div className=" mt-9 overflow-x-hidden">
        <Hero/>
        
<Hero2/>
<Hero3/>
<Footer/>    
      
      </div>
    );
  }
  