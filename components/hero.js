"use client";

import Heropc from "./heropc"
import Heromob from "./heromob"
export default function Home() {

  return (
    <div>

        <div className="flex md:hidden">
<Heromob/>

        </div>

        <div className="hidden md:flex">
       
<Heropc/>
        </div>
    </div>
  );
}