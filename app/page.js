"use client"

// import Link from 'next/link'
import Heroj from "./../components/heroj"

import Herozag from "./../components/herozag"
import Herovid from "./../components/herovid"
import Herofaq from "./../components/herofaq"
import Hero3 from "./../components/hero3"
import Footer from "./../components/footer"
import React, { useState,useEffect } from 'react';



export default function Home() {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleWindowResize);
      

      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

    return (
      <div className=" mt-9 overflow-x-hidden">
        <Heroj w={width}/>
        <Hero3 w={width}/>
        <Herozag/>
        
        <Herovid w={width}/>
        <Herofaq/> 
<Footer/>    
      
      </div>
    );
  }
  