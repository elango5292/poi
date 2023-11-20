"use client"

import Image from 'next/image';


function Mob(){
    return(
        <div className="flex mt-[91px] flex-col w-[90%]  md:w-[410px]">
           
        <div className=" mx-auto w-[344px] h-[auto]">
        <Image
      src="/heroeye.webp"
      width={410}
      height={230}
      alt="Picture of the author"
      className=" mx-auto max-w-[90%] h-[auto]"
    />
</div>
         <div>
             <p className="vid1t pt-[27px] text-[20px] mx-auto w-[70%] ">Create  verifiable records anonymously</p>
         </div>

     </div>
    )
}


export default function () {
    return (
        <div className='mt-[40px]'>
           
      <div className="flex md:hidden">
        <Mob/>
      </div>


        </div>
    )
}