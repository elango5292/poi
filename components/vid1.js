"use client"


import Pc from "./vid1pc"
import Mob from "./vid1mob"

export default function ({w}) {
    return (
        <div>{w>768?<div className="hidden md:flex"><Pc/></div> :<div className="flex md:hidden"><Mob/></div> }</div>
    )
}