"use client"

import Pc from "./vid2pc"
import Mob from "./vid2mob"

export default function ({w}) {
    var bp = 768 ;
    return (
        <div>{w>bp?<div className="hidden md:flex"><Pc/></div> :<div className="flex md:hidden"><Mob/></div> }</div>
    )
}