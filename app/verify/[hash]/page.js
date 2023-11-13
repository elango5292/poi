'use client'
import CryptoJS from "crypto-js";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from 'next/navigation';
import { MdHideSource } from 'react-icons/md';

import { CgProfile } from "react-icons/cg";

import getTime from '../../../modules/getime';
import networks from "../../../lib/networks"
import Footer from "./../../../components/footer"
import Postdetail from "./../../../components/postdetail"

export default function verify() {
    const pathname = useParams();
    const prms = useSearchParams();

    const passw = decodeURIComponent(prms.get('p'));
    const chain = prms.get('chain');


    const [postdate, setpostdate] = useState("");
    const [words, setWords] = useState("");
    const [rpc, setrpc] = useState("");


    useEffect(() => {
        if (chain) {
            setrpc(networks(chain))
            getTransactionData(networks(chain), chain, pathname.hash)
        }

    }, [chain]);


    async function getTransactionData(rpc, chain, hash) {
        const requestObject = {
            jsonrpc: "2.0",
            method: "eth_getTransactionByHash",
            params: [hash],
            id: chain,
        };


        try {
            const response = await fetch(rpc, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestObject),
            });

            const responseData = await response.json();

            if (responseData && responseData.result) {
                const reciept = responseData
                const cleanedHexString = reciept.result.input.slice(2);
                setpostdate(getTime(reciept.result.blockNumber, chain))

                let decData = CryptoJS.enc.Hex.parse(cleanedHexString).toString(CryptoJS.enc.Utf8)
                let bytes = CryptoJS.AES.decrypt(decData, passw).toString(CryptoJS.enc.Utf8)

                console.log("bytes", bytes);

                const wordsli = bytes.split("<>");
                deco(wordsli);
                console.log(wordsli);


            } else {
                console.log("null");
            }
        } catch (error) {
            console.log("RPC request error:", error);
        }
    }

    function deco(words) {
        var ccon = words
        const decodo = new TextDecoder();
        let tit = new Uint8Array(ccon[4].split(',').map(Number));
        let keywor = new Uint8Array(ccon[5].split(',').map(Number));
        let descri = new Uint8Array(ccon[6].split(',').map(Number));

        ccon[4] = decodo.decode(tit)
        ccon[5] = decodo.decode(keywor)
        ccon[6] = decodo.decode(descri)



        if (ccon[0] === "1x") {
            let namoe = new Uint8Array(ccon[1].split(',').map(Number));
            ccon[1] = decodo.decode(namoe)
            setWords(ccon)
        } else {
            setWords(ccon)
        }

    }


    return (
        <div>
        <div className="max-w-3xl mt-24 min-h-[80vh] mx-auto p-4">
            <h1 className="mb-4 text-3xl  font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl">
                {words[4]}
            </h1>

            <div className="text-white">
                <p rel="author" className="text-xl font-bold">
                    {(words[0] === "1x") ? <p>
                        <CgProfile className="mx-2 inline" />{words[1]}
                    </p> : <p><MdHideSource className="inline mx-2" /> "Annonymous"</p>}
                </p>


                <p className="text-base mx-2 font-light text-gray-400">
                    {postdate}
                </p>
            </div>

            <div className="mt-8 text-white">
                <p style={{ whiteSpace: 'pre-line' }}>
                    {words[6]}
                </p>
            </div>

        </div>
        <div className="mb-24">
        <Postdetail/></div>
        <Footer/>
        </div>
    );
}
