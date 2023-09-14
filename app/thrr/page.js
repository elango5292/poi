"use client"
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export default function thrr(){
    const [en,seten]=useState("")
    const [dn,setdn]=useState("")



function enc(){
    const postText = "<>"+"hello nm"


    console.log("post text:",postText)

    seten("0x"+CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(CryptoJS.AES.encrypt(postText, "tpassword").toString())))
    console.log("post data:",en);
}


    function desc(){
    const reciept =en
    const cleanedHexString = reciept.slice(2);
    let decData = CryptoJS.enc.Hex.parse(cleanedHexString).toString(CryptoJS.enc.Utf8)
    console.log(decData);
    let bytes = CryptoJS.AES.decrypt(decData, "tpassword").toString(CryptoJS.enc.Utf8)
    
    console.log(bytes);

}


    return(

        <p>
            <button className="m-5" onClick={()=>enc()}>enc</button>
            <button className="m-5" onClick={()=>desc()}>dec</button>
        </p>
    )
}