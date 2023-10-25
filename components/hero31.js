"use client"

import Cryptologo from "./cryptologos"
export default function hero3(){
return(
        <div id="31" className="boxcryptologo overflow-hidden flex  flex-col relative h-[360px] md:h-[425px] mx-auto md:w-[514px] md:max-w-[514px] w-[90%] max-w-[340px] md:ml-9 md:p-12">
    <Cryptologo />
    <div className="relative z-90 md:top-[45vh] md:-left-[2.5em]  px-auto top-[75%] md:top-[80%]">
    <p className=" w-[240px] md:w-[292px] mx-auto md:mr-4 text-[20px] md:text-[1.5625em] undercryptologo">
    Record on blockchains you already know
    </p></div>
    </div>  
)
}