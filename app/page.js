import React from "react";
import Link from 'next/link'

 
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
 
  
const UnderConstruction = () => {
    return (
        <main className="flex flex-col min-h-screen items-center w-full justify-center">
        <div className="text-4xl sm:text-6xl w-3/4 font-inter text-white font-bold	 text-center mb-6 md:mb-12">
            <p>Welcome to the Proof of Innovations!</p>
          
        </div>
        <div className="text-xs md:text-sm font-inter font-light text-white text-center mb-4 md:mb-8">
        <p>! We are currently in the <span className="underline italic">beta</span> stage. Works on some chains only.</p>
        </div>

        <div className="flex flex-col w-3/4 md:flex-row justify-center">
          <div className="m-3 rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-white px-9">
            <Link href="/post">
            <div className=" m-3 rounded-lg border border-transparent transition-colors hover:border-neutral-700 hover:cursor-pointer">
              Post your innovation
            </div>
            </Link>
          </div>
          <div className="m-3 rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-white px-9">
          <Link href="/verify">
            <div className="m-3 rounded-lg border border-transparent transition-colors hover:border-neutral-700 hover:cursor-pointer">
              Review your innovation
            </div>
            </Link>
          </div>
        </div>
      </main>
      
       

    );
};

export default UnderConstruction;
