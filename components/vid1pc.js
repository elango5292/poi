"use client"

import Spline from '@splinetool/react-spline';

function Pc(){
    return(
        <div className="hidden md:flex mt-9 flex-col w-[90%]  md:w-[414px]">

            <div  className="pl-[15%]">

<Spline className="w-12   h-auto" scene="https://prod.spline.design/mU8ofPaR3FI3lVe3/scene.splinecode" />
            </div>
            <div>
                <p className="vid1t text-3xl">Share ideas worry-free, keep ownership secure</p>
            </div>
        


        </div>

    )
}


export default function () {
    return (
        <div><div className="hidden md:flex"><Pc/></div></div>
    )
}