"use client"

import dynamic from 'next/dynamic'

const Pc = dynamic(() =>
    import("./vid2pc"), {
    loading: () => <div className="flex items-center w-full mx-auto justify-center h-20">
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-md bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
    </div>,
}
)


const Mob = dynamic(() =>
    import("./vid2mob"), {
    loading: () => <div className="flex items-center w-full mx-auto justify-center h-20">
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-md bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
    </div>,
}
)



export default function ({w}) {

    return (
        <div><div className="hidden md:flex"><Pc/></div> <div className="flex md:hidden"><Mob/></div> </div>
    )
}