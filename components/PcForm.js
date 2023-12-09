"use client"
import { FaLockOpen, FaLock } from "react-icons/fa";
import Atos from "@/components/atos"
import { useState,useEffect } from "react";
export default function Pcform(props){
    const [act , setAct]=useState(false)
    const [coloract , setcoloract]=useState(false)
useEffect(()=>{
if (act) {
    setcoloract(false)
}
},[act])
    function handleContinue(){

        var inputElement1 = document.getElementById('ppassword');
        var inputElement2 = document.getElementById('pname');
        var inputElement3 = document.getElementById('pid');

        var charLengthInput1 = inputElement1.value.length;
        var charLengthInput2 = inputElement2.value.length;
        var charLengthInput3 = inputElement3.value.length;
       
        if (charLengthInput1>=12 && charLengthInput2>=1 && charLengthInput3 >=3 && act){
            props.ar[8](true)
            setcoloract(false)

        } else {
            inputElement1.reportValidity()
            inputElement2.reportValidity()
            inputElement3.reportValidity()
        }
        if (!act){
            setcoloract(true)
        }
    }


    return(<main className="mt-10 mb-24  justify-center hidden md:flex ">

    <div className="flex-col w-4/5 mx-auto h-3/4 bg-gradient-to-b from-[#111111] to-transparent rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-white/10 px-9 pt-2">
        <div
            className="group flex w-fit m-3 items-end justify-end rounded-lg border border-transparent transition-colors hover:border-neutral-700 hover:cursor-pointer " onClick={props.closer}
        >
            <h2 className={`px-4 py-2 text-md`}>
                <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                    &lt;-
</span>
                {' '}Back

</h2>
        </div>


        <div className="flex  items-center justify-around bg-transparent text-white">
            {/* Left Column */}
            <div className="flex w-2/5 mx-5 flex-col flex-1 border-0">
                <div className="  mx-5 rounded-md border-0text-white shadow-sm ring-1 ring-inset ring-white/10">
                    <h1 className="text-lg p-4 tracking-wide rounded-t-md font-bold border-0 text-white shadow-sm ring-1 ring-inset ring-white/10 ">{props.br[0]}</h1>


                    <p className=" font-thin p-4 overflow-hidden max-h-40">{props.br[1].slice(0,155)}....</p>
                </div>
                <div className="p-4 mt-5 items-center ">
                    <label htmlFor="keywords" className="block tracking-wider text-sm my-2 font-light">Keywords</label>
                    <textarea
                        type="text"
                        id="keywords"  placeholder="Keyword1, Keyword2.." disabled={props.br[9]}
                        value={props.br[2]}
                        onChange={(e) => props.ar[2](e.target.value)}

                        className="resize-none mt-1 px-3 py-2 block w-full mr-5 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 "
                    ></textarea>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex-col h-fit mx-5 w-2/5 rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-white/10 p-5 ml-auto">
                <div className="p-2 items-center justify-end">
                    <label htmlFor="ppassword" className="block tracking-wider text-sm font-light">Password</label>
                    <input
                     required
                        type="password"
                        id="ppassword"
                        minLength="12"
                        className="mt-1 px-3 py-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 "
                        value={props.br[3]} disabled={props.br[9]}
                        onChange={(e) => props.ar[3](e.target.value)}
                   />
                </div>
                <div className="p-2 items-center justify-end">
                    <label htmlFor="pname" className="block tracking-wider text-sm font-light">Name</label>
                    <div className="flex items-center">
                    <input
                     required
                        type="text"
                        id="pname"
                        minLength="1"
                        className="  mt-1 px-3 py-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 "
                        value={props.br[4]} disabled={props.br[9]}
                        onChange={(e) => props.ar[4](e.target.value)}
                   /> 
                   
                   <div onClick={()=>props.ar[7](!props.br[7])}>{props.br[7]?<FaLock className="inline mx-2" />:<FaLockOpen className="inline mx-2" />}</div>
                    </div>
                </div>
                <div className="p-2 items-center justify-end">
                    <label htmlFor="pid" className="block tracking-wider text-sm font-light ">ID</label>
                    <input
                     required
                        type="text"
                        id="pid"
                        minLength="3"
                        className="mt-1 px-3 py-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 "
                        value={props.br[5]} disabled={props.br[9]}
                        onChange={(e) => props.ar[5](e.target.value)}
                    />
                </div>
                <div className="p-2 items-center justify-center">
                    <label htmlFor="dob" className="block tracking-wider text-sm font-light">DOB</label>
                    <input
                        type="date"
                        id="dob"
                        className="mt-1 px-3 py-2 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 "
                        value={props.br[6]} disabled={props.br[9]}
                        onChange={(e) => props.ar[6](e.target.value)}
                    />
                </div>
            </div>


        </div>
        {/* Continue Button */}
        <div className='flex flex-col mt-12 mb-12 w-auto items-start  ml-9  pb-2'>
        <div className='flex flex-col gap-2 w-auto items-start justify-start  pb-2'>
        < Atos colorr={coloract} setChecked={setAct} checked={act}/>
            <div
                className="group flex w-full mx-3  rounded-lg border border-transparent transition-colors hover:border-neutral-700 hover:cursor-pointer "
                onClick={handleContinue} disabled={props.br[9]}
           >
            
                <h2 className={`px-4 text-center w-[90%] py-2 bg-[#DADADA]  rounded-sm text-black text-md `}>
                    Continue{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
</span>
                </h2>
            </div>
        </div></div>
    </div>


</main>)
}
