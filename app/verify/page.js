'use client'
import { useState,useEffect } from "react";

import dynamic from 'next/dynamic'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import networks from "../../lib/networks"
import Footer from "./../../components/footer"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import CryptoJS from "crypto-js";
import worder from "../../lib/postwords"

const Verifyformtop = dynamic(() =>
    import("../../components/verifyformtopcomponent"), {
    loading: () => <div className="flex items-center justify-center h-20">
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-md bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
    </div>,
}
)

import Confirmed from "@/components/confirmed"

const Verifyform = dynamic(() =>
    import("../../components/verifyForm"), {
    loading: () => <div className="flex items-center justify-center h-20">
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-md bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
    </div>,
}
)

const Verifyform1 = dynamic(() =>
    import("../../components/VerifyForm1"), {
    loading: () => <div className="flex items-center justify-center h-20">
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-md bg-white/30 mx-1 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-white/30 mx-1 animate-pulse"></div>
    </div>,
}
)






const TransactionDetails = () => {

    const [up,setup]=useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [words, setWords] = useState("");
    const [pwords, setPwords] = useState("");
    const [ph, setph] = useState("");
        const [time, setTime] = useState("Sun, 01 Jan 2023 01:00:00 GMT");
        const [chaing, setchaing] = useState("1");
function handlebac(){
    setup((prev)=>1)
}
function setpw(postwords){
    setPwords((prev)=>postwords)
}
async function postwordcollector(hash,passw,chain){
    let postwords = await worder(hash,passw,chaing)
    setpw(postwords)
    console.log("here",postwords)

}
    function Verify2() {
        const [showPopup, setShowPopup] = useState(false);
        const handleClose = (e) => {
            if (e.target.className.includes('backdrop')) {
                setShowPopup(false);
            }
        }
    
        const handleNothing = (e) => {
            e.stopPropagation();
        }
        return (
            <div className="min-h-screen mt-20 w-[98vw] overflow-hidden ">
            <div className="min-h-[90vh] mx-auto flex flex-col">
                <div className=" mx-auto flex flex-col ">
                    <h1 className=" h-[28px] w-[257px] md:w-auto text-[#D8D8D8] md:text-center text-[16px] md:text-2xl font-semibold leading-normal">
                        Author Identity Verification
                    </h1>
                    <p className="mt-[15px] w-[293px] md:w-[618px] md:h-auto text-gray-400 md:text-center text-[12px] md:text-sm font-light leading-normal ">
                    This interface simplifies the author verification process. In the 'Name' section, the author's name is auto-populated if publicly available; otherwise, the user have to enter it manually. The 'Date of Birth' and 'ID' sections collect relevant author information, the 'Identity Password' section requires the password set by the author upon creating the post. Upon submission, an instant indication confirms or denies successful decryption of blockchain data using the provided password, ensuring a straightforward and secure verification process. </p>
                </div>
                

                <div className="md:mt-[45px] mx-auto mt-[30px]">
                <div
                    className="group flex w-fit items-end justify-end rounded-lg border border-transparent transition-colors hover:border-neutral-700 hover:cursor-pointer " onClick={handlebac}
                >
                    <h2 className={`px-2 py-1 text-sm font-extralight`}>
                        <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                            &lt;-
  </span>
                        {' '}Back
</h2>
                </div><Verifyformtop  words={words} pwords={pwords} ph={ph} chain={chaing}/></div>
                <div className="md:mt-[40px] mt-[30px]">

                <Verifyform pwords = {pwords} op={showPopup} handleop = {()=>{setShowPopup(true)}}/></div>
                {showPopup && (
            <div className="fixed inset-0 z-20 flex items-center md:items-end justify-center w-screen h-screen backdrop-blur-sm bg-black  bg-opacity-60 " onClick={handleClose}>
                <div className="md:w-[45%]  confirmedcontainer animate-fade-in-up md:h-auto w-[85%]  m-5  pt-5 pb-4 md:py-9 text-center backdrop-blur-lg rounded-md mb-4 bg-gradient-to-b from-slate-100 to-gray-900 bg-opacity-40 md:bg-opacity-30 text-[#DADADA] shadow-sm ring-1 ring-inset ring-white/10" onClick={handleNothing}>
                    <Confirmed/>

                    <Button onClick={()=>setShowPopup(false)} className="px-5 py-2 mt-6 mb-3 bg-[#e1e1e1] text-black ring-1 ring-inset ring-black/10">Done</Button>
                </div>
            </div>)}
                <div className="md:mt-[85px] mx-auto mt-[150px]">
                  <p className="text-[12px] font-light px-5 text-[#6D6D6D] md:px-5">*Note: Successfully verifying this interface allows authors to assert their authorship in the event of a dispute. Authors can do this by entering their identity password and confirming their authorship. The system then attempts to decrypt the encrypted official ID number, name, and date of birth. It’s important to remember that all sensitive information, including the ID number and date of birth, remains encrypted and private, never being disclosed to the public. The author verification process identifies individuals based on their knowledge of the identity password, which subsequently reveals the official ID number. This ID number, issued by any official authority, can then be cross-referenced with the name and date of birth on the encrypted data to confirm the author’s identity. The ID can provided by any official body, and authorship is established as it corresponds with the author’s date of birth and name, thereby enhancing the robustness of the verification process in case of a dispute. Alternatively, authorship can also be established by simply holding the private key of the address that published the post.</p>
                </div>
                 </div></div>
        )
    }

    function Verify1() {
       
        const [transactionHash, setTransactionHash] = useState("");
        const [chain, setchain] = useState("1");
        
        const [rpc, setrpc] = useState("");
        const [isCopied, setIsCopied] = useState(false);
        
        const handleCopy = () => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1000);
        };
        useEffect(() => {

            if (chain) {
                setrpc(networks(chain))
            }


        }, [chain]);


        async function getTransactionData(HsH) {

            const rpcEndpoint = rpc;

            const requestObject = {
                jsonrpc: "2.0",
                method: "eth_getTransactionByHash",
                params: [HsH],
                id: chain,
            };


            try {
                const response = await fetch(rpcEndpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestObject),
                });

                const responseData = await response.json();


                if (responseData && responseData.result) {
                    return (responseData)

                } else {
                    console.log("null")
                }
            } catch (error) {
                console.log("RPC request error:", error);
            }
        }

        async function getTime(bnum) {

            const rpcEndpoint = rpc

            const requestObject = {
                jsonrpc: "2.0",
                method: "eth_getBlockByNumber",
                params: [bnum, false],
                id: chain,
            };

            const response = await fetch(rpcEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestObject),
            });

            const responseData = await response.json();
            const timestamp = parseInt(responseData.result.timestamp * 1000)
            const date = new Date(timestamp);
            setTime(date.toUTCString())

        }

        async function handleCollect() {
            const lasth = transactionHash
        
            const recipt = await getTransactionData(lasth)
            
            const blockNum = recipt.result.blockNumber
            getTime(blockNum)
            const cleanedHexString = recipt.result.input?.slice(2)
            const parts = CryptoJS.enc.Hex.parse(cleanedHexString)
            var STRtransaction = CryptoJS.enc.Utf8.stringify(parts);
            const wordsli = STRtransaction.split("<>");
            
            setWords((prev)=>wordsli)
            setph((prev)=>lasth)
            setchaing((prev)=>chain)

      
      


        }


        function handleverify() {
           
            setup((prev)=>2);
         
            postwordcollector(words[1],words[2],chain)


        }
        function handleSubmit(e) {
            e.preventDefault();
            handleCollect()
            setShowPopup((prev)=>true)

        }


        const FormSchema = z.object({
            username: z.string().min(2, {
                message: "Wrong Publish hash",
            }),
        })

        const form = useForm({
            resolver: zodResolver(FormSchema),
        })


        function onValues(e) {
            setTransactionHash(e.target.value)
        }

        return (
            <div className="min-h-screen w-[98vw] overflow-hidden ">
                <div className="min-h-[90vh] mx-auto flex flex-col">
                    <div className=" mx-auto flex flex-col ">
                        <h1 className=" h-[28px] w-[257px] md:w-auto text-[#D8D8D8] md:text-center text-[16px] md:text-2xl font-semibold leading-normal">
                            Author Identity Verification
                        </h1>
                        <p className="mt-[15px] w-[293px] md:w-[618px] md:h-[89px] text-gray-400 md:text-center text-[12px] md:text-sm font-light leading-normal ">
                            This page offers a robust method to confirm the identity of the individual behind a post. By inputting the publish-hash associated with a post and selecting the corresponding blockchain, users can seamlessly locate their content within the blockchain and initiate the author verification process.
                        </p>
                    </div>




                    <div className='mt-[60px] md:mb-[25px] pt-[15px] md:py-[30px]  mx-auto w-[310px] px-[15px] md:w-[536px] md:px-[50px] verifyformfirst'>



                        <Form {...form}>
                            <form className=" space-y-6">
                                <FormField
                                    control={form.control}
                                    name="Publish Hash"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[12px]">Publish Hash</FormLabel>
                                            <FormControl>
                                                <Input className="bg-black  border-[#5E5E5E] text-gray-300" placeholder="0x1231..." {...field}  value={transactionHash} onChange={(e) => onValues(e)} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex overflow-auto justify-between items-center">
                                    <Select onValueChange={setchain} className="self-center  ">
                                        <SelectTrigger className="w-[180px] mx-1 my-2 border-[#5E5E5E] text-[#d5d5d5]">
                                            <SelectValue placeholder="Select Chain" className="text" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gradient-to-b from-[#141414] to-[#000]  border-[#5E5E5E] bg-opacity-40 backdrop-blur-lg">
                                            <SelectGroup>
                                                <SelectLabel>Chains Available</SelectLabel>
                                                <SelectItem value="11155111">Sepolia</SelectItem>
                                                <SelectItem value="80001">Polygon Mumbai</SelectItem>
                                                <SelectItem value="97">BSC Testnet</SelectItem>
                                                <SelectItem value="43113">Avalanche Fuji</SelectItem>
                                                <SelectItem value="42161">Arbitrum One</SelectItem>
                                                <SelectItem value="43114">Avalanche</SelectItem>
                                                <SelectItem value="137">Polygon</SelectItem>
                                                <SelectItem value="56">BNB Smart Chain</SelectItem>
                                                <SelectItem value="1">Ethereum</SelectItem>

                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>

                                    <Button type="submit" onClick={(e)=>{handleSubmit(e)}} className="mx-2 bg-gradient-to-b from-[#ebebeb] to-[#c5c5c5]  text-black">Search</Button>

                                </div>
                            </form>
                        </Form>




                    </div>


                    

                    {showPopup && 
                       <Verifyform1 words={words} ph={ph} time={time} handleverify={handleverify} handleCopy={handleCopy} isCopied={isCopied} chain={chaing}/>
                    }

                </div>
            </div>)
    }

    return (
        <main className="mt-[110px] ">

            {up===1 ?  <Verify1/> :<Verify2 />}
           
            <Footer />
        </main>
    );
};



export default TransactionDetails;

