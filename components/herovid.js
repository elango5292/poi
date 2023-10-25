"use client"
import Vid1 from "../components/vid1.js";
import Vid2 from "../components/vid2.js";
export default function({w}){
   
    return(<div className="md:mt-[119px] mb-9 pt-[80px] w-screen threecontainerzig">
        
        <div className="flex mx-auto justify-center items-center flex-col md:flex-row w-full md:gap-x-36 ">
<Vid1 w={w}/>
<Vid2  w={w}/>
</div>
    </div>

    )
}