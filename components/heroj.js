// "use client"

// import dynamic from 'next/dynamic'

import Heropc from "./herop"
import Heromob from "./herojm"
// const Heropc = dynamic(() =>
//     import("./herop"), {
//     loading: () => <div className="flex w-[90vw] mx-auto items-center justify-center h-20">
//         <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
//         <div className="w-4 h-4 rounded-md bg-white/30 mx-1 animate-pulse"></div>
//         <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
//     </div>,
// }
// )

// const Heromob = dynamic(() =>
//     import("./herojm"), {
//     loading: () => <div className="flex items-center w-[90vw] mx-auto justify-center h-20">
//         <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
//         <div className="w-4 h-4 rounded-md bg-white/30 mx-1 animate-pulse"></div>
//         <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
//     </div>,
// }
// )


export default function Home({w}) {
  

  return (
    <div>
<div className='hidden md:flex'><Heropc/></div> 
                
<div className='flex md:hidden'><Heromob/></div>

      
        
    </div>
  );
}

