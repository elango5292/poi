"use client"

import Spline from '@splinetool/react-spline';


function Pc(){
    return(
        <div className="hidden md:flex flex mt-9 flex-col w-[90%]  md:w-[410px]">
           
        <div className="mt-9">
<Spline width={200} height={300} scene="https://prod.spline.design/ZoTAcxYSJVlf9OZp/scene.splinecode" />
</div>
         <div>
             <p className="vid1t pt-12 text-3xl ">Create  verifiable records anonymously</p>
         </div>

     </div>
    )
}

export default function () {
    return (
        <div>

      <div className="hidden md:flex"></div>
      <Pc/>

        </div>
    )
}