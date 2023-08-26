import { FaLockOpen, FaLock } from "react-icons/fa";
export default function Mobileform(props){

    function handleContinue(){

        var inputElement1 = document.getElementById('mpassword');
        var inputElement2 = document.getElementById('mname');
        var inputElement3 = document.getElementById('mid');

        var charLengthInput1 = inputElement1.value.length;
        var charLengthInput2 = inputElement2.value.length;
        var charLengthInput3 = inputElement3.value.length;
       
        if (charLengthInput1>=12 && charLengthInput2>=1 && charLengthInput3 >=3){
            props.ar[8](true)

        } else {
            inputElement1.reportValidity()
            inputElement2.reportValidity()
            inputElement3.reportValidity()
        }

    

    }
    return(
<div className="flex mt-10 justify-center mb-5 pb-5 md:hidden">

                <div className="flex flex-col w-11/12 max-w-md rounded-md border-0 text-white shadow-sm ring-1 ring-inset ring-white/10 px-4 pt-2" >
                    <div
                        className="group flex w-fit m-3 items-end justify-end rounded-lg border border-transparent transition-colors hover:border-neutral-700 hover:cursor-pointer " onClick={props.closer}
                    >
                        <h2 className={`px-2 py-1 text-sm`}>
                            <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                                &lt;-
      </span>
                            {' '}Back
    </h2>
                    </div>

                    <div className="flex flex-col items-center bg-transparent text-white">
                        {/* Left Column */}
                        <div className="w-full mx-5 flex flex-col border-0">
                            <div className="rounded-md border-0 text-white shadow-sm ring-1 ring-inset mt-2 mx-3 ring-white/10">
                                <h1 className="text-xl p-4 font-bold border-0 text-white shadow-sm ring-1 ring-inset ring-white/10">{props.br[0]}</h1>
                                <p className="font-thin p-4 max-h-30">{props.br[1].slice(0,81)}....</p>
                            </div>
                            <div className="p-2 flex mt-5  flex-col">
                                <label htmlFor="keywords" className="block text-sm font-light">Keywords</label>
                                <textarea
                                    type="text"
                                    id="keywords"
                                     placeholder="Keyword1, Keyword2.." disabled={props.br[9]}
                                    value={props.br[2]}
                                    onChange={(e) => props.ar[2](e.target.value)}

                                    className="resize-none mt-1 px-3 py-2 w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col rounded-md border-0 text-white shadow-sm ring-1 ring-inset  ring-white/10 p-2 mt-9">
                            <div className="p-2 items-center justify-end">
                                <label htmlFor="mpassword" className="block text-sm font-light">Password</label>
                                <input
                                 required
                                    type="password"
                                    id="mpassword"
                                    minLength="12"
                                    className="mt-1 px-3 py-2 w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                    value={props.br[3]} disabled={props.br[9]}
                                    onChange={(e) => props.ar[3](e.target.value)}
                                />
                            </div>
                            <div className="p-2 items-center justify-end">
                                <label htmlFor="mname" className="block text-sm font-light">Name</label>
                                <div className="flex items-center">
                                <input
                                 required
                                    type="text"
                                    id="mname"
                                    minLength="1"
                                    className="mt-1 px-3 py-2 w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                    value={props.br[4]} disabled={props.br[9]}
                                    onChange={(e) => props.ar[4](e.target.value)}
                                />
                                <div onClick={()=>props.ar[7](!props.br[7])}>{props.br[7]?<FaLock className="inline mx-2" />:<FaLockOpen className="inline mx-2" />}</div>
                                
                                
                                </div>
                            </div>
                            <div className="p-2 items-center justify-end">
                                <label htmlFor="mid" className="block text-sm font-light">ID</label>
                                <input
                                 required
                                    type="text"
                                    id="mid"
                                    minLength="3"
                                    className="mt-1 px-3 py-2 w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                    value={props.br[5]} disabled={props.br[9]}
                                    onChange={(e) => props.ar[5](e.target.value)}
                                />
                            </div>
                            <div className="p-2 items-center justify-end">
                                <label htmlFor="dob" className="block text-sm font-light">DOB</label>
                                <input
                            
                                    type="date"
                                    id="dob"
                                    className="mt-1 px-3 py-2 w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                    value={props.br[6]} disabled={props.br[9]}
                                    onChange={(e) => props.ar[6](e.target.value)}
                                />
                            </div>
                        </div>

                    </div>

                    {/* Continue Button */}
                    <div className='flex w-full items-end justify-end mt-2'>
                        <div
                            className="group flex w-fit m-3 rounded-lg border border-transparent transition-colors hover:border-neutral-700 hover:cursor-pointer "
                            onClick={handleContinue} disabled={props.br[9]}
                        >
                            <h2 className={`px-2 py-1 text-sm `}>
                                Continue{' '}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
        </span>
                            </h2>
                        </div>
                    </div>
                </div>

            </div>)}