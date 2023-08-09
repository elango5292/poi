"use client";
import { useState } from "react";
import { useEffect } from "react";
// import React from "react";

import { FaLockOpen, FaLock } from "react-icons/fa";
import dynamic from 'next/dynamic'

import CryptoJS from "crypto-js";
const sha256 = require("sha256");
import { useDebounce } from 'use-debounce';

import { Stepper, Step, CardHeader, Typography } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import PageComponent from "../../components/trans"
import { CgSpinner } from "react-icons/cg";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Pcform from "../../components/PcForm"

const PageComponent = dynamic(() =>
  import("../../components/trans")
)

const Mobileform = dynamic(() =>
  import("../../components/MobileForm")
)



function stringToHex(str) {
    const wordArray = CryptoJS.enc.Utf8.parse(str);
    const hexString = CryptoJS.enc.Hex.stringify(wordArray);
    return hexString;
}



export default function Home() {
    const [isWalletConnected, setIsWalletConnected] = useState(false);

    const [password, setPassword] = useState("");
    const [tpassword, setTpassword] = useState("");
    const [address, setAddress] = useState("");
    const [Accounts, setAccounts] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [dob, setDob] = useState("");
    const [Name, setName] = useState("");
    const [Keywords, setKeywords] = useState("");
    const [ID, setID] = useState("");
    const [Description, setDescription] = useState("");
    const [Title, setTitle] = useState("");
    const [protName, setProtName] = useState(false);
    const [postHash, setPostHash] = useState('');
    const [posted, setPosted] = useState(false);
    const [publishHash, setPublishHash] = useState("");
    const [postData, setPostData] = useState("");
    const [publishData, setPublishData] = useState("");
    const [published, setPublished] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [PostConfirmations, setPostConfirmations] = useState("");
    const [PublishConfirmations, setPublishConfirmations] = useState("");
    const [debouncedtpassword] = useDebounce(tpassword, 1000);
    const [auter, setauter] = useState(false);


    function handleAuter(){
        setauter(!auter)
    }


    var changers=[setTitle,setDescription,setKeywords,setPassword,setName,setID,setDob,setProtName,setShowPopup,setPosted]

    var valers=[Title,Description,Keywords,password,Name,ID,dob,protName,showPopup,posted]


    
   
    function handleClose() {
        setShowPopup(false)
    }

    const handleNothing = (event) => {
        event.stopPropagation();
    }
    const handleNext = (event) => {

        setActiveStep(activeStep + 1)
    }
    const handleBack = (event) => {
        setActiveStep(activeStep - 1);
    };
    const handlePostCompletion = () => {
        setPosted(true)
    }

    const handlePublishCompletion = () => {
        setPublished(true)
    }





    function constructTrx(

    ) {
        if (protName) {
            var hname = sha256(Name + password);
            var hdate = sha256(dob + password);
            var hnumber = sha256(ID + password);
            var uhead = "0x" + "<>" + hname + "<>" + hdate + "<>" + hnumber;
        } else {
            var uhead =
                "1x" + "<>" + Name + "<>" + sha256(dob) + "<>" + sha256(ID + password);
        }



        const postText = uhead + "<>" + Title + "<>" + Keywords + "<>" + Description;

        const hexpost=CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(postText))

        console.log("post text:",postText)
 


        // console.log("enc data:",encData)
        // const topost = "0x"+encData
        // console.log("topost:",topost)
        setPostData("0x"+CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(CryptoJS.AES.encrypt(hexpost, tpassword).toString())))
        console.log("post data:",postData);
    }

    function constructPTrx(
    ) {

        var hdate = sha256(dob + password);
        var hnumber = sha256(ID + password);

        if (protName){
            var hname = sha256(Name + password);
            var anon = "0x"

        } else {
            var hname=Name
            var anon = "1x"
           
        }

        var PublishText = anon+"<>" +postHash + "<>" + tpassword+"<>" + hname+"<>" + Title + "<>" + Keywords+ "<>" + hdate+ "<>"+hnumber;
        const hexString = "0x" + stringToHex(PublishText);
        setPublishData(hexString)
    }


    const handlePostHash = (childData) => {
        setPostHash(childData);
    };

    function handlePost() {
        
        handleNext()
    }


    function handlePublish() {
        // constructPTrx()
        handleNext()
    }

    const handlePublishHash = (childData) => {
        setPublishHash(childData);
    };

    async function getLatestBlockNumber() {
        const rpcNodeURL = 'https://clean-small-crater.ethereum-sepolia.discover.quiknode.pro/21d54880912ac1edfc527e2a9b3311ff35df1385/';
        const response = await fetch(rpcNodeURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_blockNumber',
                params: [],
            }),
        });

        const data = await response.json();
        const latestBlockNumber = parseInt(data.result, 16);
        return latestBlockNumber;
    }

    async function getTransactionBlockNumber(txHash) {
        const rpcNodeURL = 'https://clean-small-crater.ethereum-sepolia.discover.quiknode.pro/21d54880912ac1edfc527e2a9b3311ff35df1385/';
        const response = await fetch(rpcNodeURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_getTransactionByHash',
                params: [txHash],
            }),
        });

        const data = await response.json();
        const transactionBlockNumber = parseInt(data.result.blockNumber, 16);
        return transactionBlockNumber;
    }

    async function checkConfirmations() {
        const latestBlockNumber = await getLatestBlockNumber();
        if (postHash !== "") {
            const transactionBlockNumber = await getTransactionBlockNumber(
                postHash
            );

            const PostConfirmationCount = latestBlockNumber - transactionBlockNumber;

            setPostConfirmations(PostConfirmationCount);

        };
        if (publishHash !== "") {
            const transactionBlockNumber = await getTransactionBlockNumber(
                publishHash
            );

            const PublishConfirmationCount = latestBlockNumber - transactionBlockNumber;

            setPublishConfirmations(PublishConfirmationCount)

        }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            checkConfirmations();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [postHash, publishHash]);

    useEffect(() => {
        constructPTrx()
    }, [posted]);

    useEffect(() => {
        constructTrx()
    }, [debouncedtpassword]);

    function handleTitle(e){
        setTitle(e.target.value);

    }





    // Call the function with your transaction hash

    return (
        <main className="h-fit">

            <div className='grid text-center'>
            </div>

            <div>
       <div className={!auter ? "visible pt-9 flex-col items-center justify-center text-center" : "hidden"}>
            <h1
                id="my-title-input"
                data-default-value="Title"
                contentEditable="true"
                className="w-3/4 items-center justify-start text-left text-3xl font-bold bg-transparent text-white focus:outline-none resize-none my-0 mx-auto"
                onInput={(e)=>setTitle(e.target.textContent)}
                disabled={posted}
            ></h1>

            <div className="w-3/4 flex justify-start mx-auto my-3">
                <div className="linee w-1/2 h-px"></div>
            </div>

            <textarea
                className="w-3/4 text-xl rounded-md border-0 bg-none text-white focus:outline-none shadow-sm sm:text-sm h-80 resize-none bg-white/0"
                placeholder="Description..."
                 disabled={posted}
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            

<div onClick={handleAuter}
          className="w-3/4 group mx-auto flex justify-start rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:cursor-pointer "
        >
          <h2 className={`mb-3 text-lg font-md`}>
            Continue{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </div>
        </div>

     

<div className={auter ? "visible" : "hidden"}>
<Mobileform closer={handleAuter} ar={changers} br={valers} className="md:hidden flex"/>
<Pcform closer={handleAuter} ar={changers}  br={valers} className="hidden md:flex"/>

</div>


        </div>

            

           

            {/* <div className=" overflow-hidden absolute w-full blur-3xl -z-10">
                <div
                    className="aspect-[19/29] md:aspect-[1355/700] select-none cursor-pointer bg-gradient-to-tr from-[#57b53f] to-[#17f856] opacity-10"
                    style={{
                        clipPath:
                            "polygon(45% 47%, 75% 17%, 79% 45%, 66% 68%, 76% 91%, 23% 81%, 14% 48%, 30% 13%)",
                    }}
                />
            </div> */}






            {showPopup && (<div className="fixed inset-0 flex items-center justify-center w-screen h-screen backdrop-blur-sm bg-black/30" onClick={handleClose}>
                <div className=" md:w-auto w-3/4 p-5 m-5 px-3.5 py-3.5 border-0 text-center backdrop-blur-md bg-black/30 rounded-md  mb-4 bg-black/5 text-white shadow-sm ring-1 ring-inset ring-white/10 " onClick={handleNothing}>
                    <div className="flex flex-col px-2">
                        {activeStep === 0 && (
                            <div className="flex flex-col items-center">
                                <PageComponent s="showwal" className="self-center"/>
                                <div className="backdrop-blur-md bg-black/30 text-center items-center w-auto lg:min-w-700 rounded-md border-0 bg-black/5 px-3.5 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 my-4 ">
                                    <p className="text-left pb-3 m-auto">Encrypt Post Transaction:</p>
                                    <input
                                        type="password"
                                        className="w-11/12 flex flex-col text-center rounded-md border-0 bg-white/5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 mb-4"
                                        placeholder="Transaction Password"
                                        value={tpassword}
                                        onChange={(e) => setTpassword(e.target.value)}
                                    /></div></div>

                        )}
                        {activeStep === 1 && (
                            <div className="rounded-md ring-1 ring-inset ring-white/10 m-4">
                                <div className="flex flex-col ">
                                    <h2 className="text-left ml-5 my-4">Post Transaction Hash: </h2>
                                    <p className={(postHash === "") ? "w-auto h-8 animate-pulse mx-5 rounded-md border-0 bg-white/5 px-3.5 pb-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 mb-4" : "h-auto text-left  md:w-auto   mt-1 mx-5 mb-5 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 whitespace-normal break-words"}>
                                        {postHash} </p>




                                    <div className="flex flex-col md:flex-row justify-between items-center md:w-auto m-5 mb-8">
                                        <div className="flex items-center">
                                            {PostConfirmations >= 7 ? (
                                                <IoCheckmarkDoneCircle className="mr-1 h-6 w-6" />
                                            ) : (
                                                <CgSpinner className="animate-spin mr-1 h-6 w-6" />
                                            )}
                                            <span className="mr-1">Confirmations:</span>
                                            <span className="mx-1 md:mx-7">{PostConfirmations ? PostConfirmations : (<span className="p-1 animate-pulse">-</span>)}/7</span>
                                        </div>
                                        {PostConfirmations >= 7 && (
                                            <h3 className="text-left m-5 ml-8">
                                                Posted Successfully
                                            </h3>
                                        )}
                                    </div>

                                </div>

                            </div>

                        )}

                        {activeStep === 2 && (
                            <div className="rounded-md ring-1 ring-inset ring-white/10 m-4">
                            <div className="flex flex-col ">
                                <h2 className="text-left ml-5 my-4">Publish Transaction Hash: </h2>
                                <p className={(publishHash === "") ? "w-auto h-8 animate-pulse mx-5 rounded-md border-0 bg-white/5 px-3.5 pb-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 mb-4" : "h-auto text-left  md:w-auto   mt-1 mx-5 mb-5 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6 whitespace-normal break-words"}>
                                    {publishHash} </p>




                                <div className="flex flex-col md:flex-row justify-between items-center md:w-auto m-5 mb-8">
                                    <div className="flex items-center">
                                        {PublishConfirmations >= 7 ? (
                                            <IoCheckmarkDoneCircle className="mr-1 h-6 w-6" />
                                        ) : (
                                            <CgSpinner className="animate-spin mr-1 h-6 w-6" />
                                        )}
                                        <span className="mr-1">Confirmations:</span>
                                        <span className="mx-1 md:mx-7">{PublishConfirmations ? PublishConfirmations : (<span className="p-1 animate-pulse">-</span>)}/7</span>
                                    </div>
                                    {PublishConfirmations >= 7 && (
                                        <h3 className="text-left m-5 ml-8">
                                            Publhed Successfully
                                        </h3>
                                    )}
                                </div>

                            </div>

                        </div>
                        )}


                        <div className="flex w-auto justify-center">
                            <Stepper
                                activeStep={activeStep}
                                lineClassName="bg-white/50 "
                                activeLineClassName="bg-white "
                                className="justify-between m-5 stepper-container"
                            >
                                <Step
                                    onClick={() => setActiveStep(0)}
                                    completedClassName=" text-white bg-green-300"
                                    className="h-5 w-5 bg-gray-100"
                                    activeClassName="circle bg-indigo-400"
                                />
                                <Step
                                    onClick={() => setActiveStep(1)}
                                    completedClassName=" text-white bg-green-300"
                                    className={posted ? ("h-5 w-5 bg-green-300") : ("h-5 w-5 bg-gray-100")}
                                    activeClassName={posted ? ("circle") : ("circleCompleted")}
                                />
                                <Step
                                    onClick={() => setActiveStep(2)}
                                    completedClassName=" text-white bg-green-300"
                                    className={published ? ("h-5 w-5 bg-green-300") : ("h-5 w-5 bg-gray-100")}
                                    activeClassName={published ? ("circle") : ("circleCompleted")}
                                />
                            </Stepper>
                        </div>
                    </div>
                    <CardHeader className="w-auto rounded-md border-0 bg-white/0 text-white mb-4" />

                    {activeStep === 0 && (

                        <div className="flex w-auto justify-between m-3">
                            <button className="" onClick={handleClose}>
                                <FaArrowLeft /> Back
                            </button>

                            {/* <button className=" w-auto" onClick={handlePost}>
                                Post <FaArrowRight />
                            </button> */}
                            <div onClick={handlePost}>
                                <PageComponent data={postData} s={activeStep} hsh={handlePostHash} completion={posted} setCompletion={handlePostCompletion} />
                            </div>

                        </div>

                    )}


                    {activeStep == 1 && (

                        <div className="flex w-auto justify-between m-3">

                            <button className="" onClick={handleBack}>
                                <FaArrowLeft /> Previous
                            </button>

                            <div onClick={handlePublish}>
                                <PageComponent data={publishData} s={activeStep} hsh={handlePublishHash} completion={published} setCompletion={handlePublishCompletion} />
                            </div>

                        </div>
                    )}



                    {activeStep == 2 && (
                        <div className="flex w-auto justify-between m-3">
                            <button className="" onClick={handleBack}>
                                <FaArrowLeft /> Back
                            </button>


                            <button className=" w-auto" onClick={handleNext}>
                                View <FaArrowRight />
                            </button>

                        </div>
                    )}


                </div>
            </div>
            )}
        </main>
    );
}
