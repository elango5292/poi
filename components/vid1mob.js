"use client"

import Image from 'next/image'


function Mob(){
    return(
        <div className="flex mt-[79px] flex-col w-[90%]  md:w-[414px]">

            <div  className=" mx-auto w-[250px] h-[auto]">
            <Image
      src="/herolok.webp"
      width={344}
      height={0}
      alt="Picture of the author" className=" mx-auto max-w-[90%] h-[auto]"
    />
            
            </div>
            <div>
                <p className="vid1t pt-[10px] mx-auto text-[20px] w-[80%]">Share ideas worry-free, keep ownership secure</p>
            </div>
        


        </div>

    )
}

export default function () {
    return (
        <div><div className="flex md:hidden"><Mob/></div></div>
    )
}