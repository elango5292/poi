"use client";

import React, { useEffect, useState } from 'react';
import networks from "../lib/networks"
import Link from "next/link";
import humanTime from "../lib/humantime"

import Table from "@/components/skeletons/table"

function Herotablepc({ dat }) {
  const logo_styles={
    11155111: "h-[20px] w-auto ml-2",
      80001: "h-[18px] w-auto ml-2",
      97: "h-[18px] w-auto ml-2",
      43113:"w-auto h-[22px] grayscale ml-2",
      42161: "h-[18px] w-auto ml-2",
      43114:"w-auto h-[22px] grayscale ml-2",
      137: "h-[18px] w-auto ml-2",
      56: "h-[18px] w-auto ml-2",
      1: "h-[20px] w-auto ml-2",
      314: "h-[20px] hover:h-[22px] grayscale w-auto ml-2",
  }
    return (
        <table className="custom-table w-full ">
            <tr className="text-left htr ">
                <th className="hth py-2 pl-9">Title</th>
                <th className="hth py-2 pl-2">Author</th>
                <th className="hth py-2 pl-2">Date</th>
                <th className="hth py-2 pl-2">Chain</th>
            </tr>

            {dat.length > 0 ? dat.map((item, index) => (
                <tr key={item.id} className={`htr leading-[2.8] ${index === dat.length - 1 ? 'border-b-0' : 'border-b'}`}>

                    <td className="title-cell htd py-2 pl-9">
                        <div className="  title-cell md:truncate md:max-w-[265px]"><Link href={`/innovations/${item.hash}/?chain=${item.chain}`}>{item.title}</Link></div>
                    </td>
                    <td className="author-cell htd text-[0.8em] md:truncate md:max-w-[85px] p-2">{item.author}</td>
                    <td className="date-cell htd text-[0.8em] p-2">{humanTime(item.date)}</td>
                    <td className="cain-cell htd p-2 pl-2"><img src={`/cryptologo/${networks(item.chain, "logotab")}`} alt="Chain logo" name={networks(item.chain, "name")} className={logo_styles[item.chain]} /></td>
                </tr>
            )):<> <tr className=''><td><div className='mt-6 animate-pulse h-7 bg-[#2b2b2b] rounded w-[250px] mb-3 pt-1 ml-9'></div></td>
            <td> <div className='mt-3 animate-pulse h-7 bg-[#2b2b2b] ml-2 pl-4  rounded w-[120px] '></div></td>
            <td> <div className='mt-3 animate-pulse h-7 bg-[#2b2b2b] rounded w-[120px] ml-2 py-2'></div></td>
            <td><div className='mt-3 animate-pulse h-7 bg-[#2b2b2b]  rounded w-[30px] ml-2 py-2'></div></td></tr>
            <tr className=''><td><div className='animate-pulse h-7 bg-[#2b2b2b] rounded w-[250px] my-3 ml-9'></div></td>
            <td> <div className='animate-pulse h-7 bg-[#2b2b2b] ml-2 pl-4  rounded w-[120px] py-2'></div></td>
            <td> <div className='animate-pulse h-7 bg-[#2b2b2b] rounded w-[120px] ml-2 py-2'></div></td>
            <td><div className='animate-pulse h-7 bg-[#2b2b2b]  rounded w-[30px] ml-2 py-2'></div></td></tr>
            <tr className=''><td><div className='animate-pulse h-7 bg-[#2b2b2b] rounded w-[250px] my-3 ml-9'></div></td>
            <td> <div className='animate-pulse h-7 bg-[#2b2b2b] ml-2 pl-4  rounded w-[120px] py-2'></div></td>
            <td> <div className='animate-pulse h-7 bg-[#2b2b2b] rounded w-[120px] ml-2 py-2'></div></td>
            <td><div className='animate-pulse h-7 bg-[#2b2b2b]  rounded w-[30px] ml-2 py-2'></div></td></tr>
            <tr className=''><td><div className='animate-pulse h-7 bg-[#2b2b2b] rounded w-[250px] my-3 ml-9'></div></td>
            <td> <div className='animate-pulse h-7 bg-[#2b2b2b] ml-2 pl-4  rounded w-[120px] py-2'></div></td>
            <td> <div className='animate-pulse h-7 bg-[#2b2b2b] rounded w-[120px] ml-2 py-2'></div></td>
            <td><div className='animate-pulse h-7 bg-[#2b2b2b]  rounded w-[30px] ml-2 py-2'></div></td></tr>
             <tr className=''><td><div className='animate-pulse h-7 bg-[#2b2b2b] rounded w-[250px] my-3 ml-9'></div></td>
            <td> <div className='animate-pulse h-7 bg-[#2b2b2b] ml-2 pl-4  rounded w-[120px] py-2'></div></td>
            <td> <div className='animate-pulse h-7 bg-[#2b2b2b] rounded w-[120px] ml-2 py-2'></div></td>
            <td><div className='animate-pulse h-7 bg-[#2b2b2b]  rounded w-[30px] ml-2 py-2'></div></td></tr>
            
            </> }
            
        </table>

    )
}

// {dat.map((item, index) => (
//     <h2>{item.title}</h2>
// ))}

function Herotablemob({ dat }) {
    return (
        <div className="ml-[19px] mt-[39px]">

{dat.length > 0 ? dat.map((item, index) => (
   <div className="flex flex-col mt-[21px]">
   <h2 className="">{item.title}</h2>
   <div className="flex flex-row mobtabletitle items-center">
       <p className="mobtableauth mr-[11px]">{item.author}</p>
       <p className="mobtabledate mr-[14px]">{humanTime(item.date)}</p>
       <img src={`/cryptologo/${networks(item.chain, "logo")}`} alt={item.chain+"_logo"} height={"1px"} width={"5px"} className="h-[13px] w-auto grayscale" />
   </div>
   <div className="w-[302px] mt-[21px] h-[1px] bg-[#2E2E2E]" />
</div>
)) : <>
<div className="flex flex-col gap-y-5">
<div className="flex flex-col mr-[19px]">
    
<div className="w-[100%] h-7 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="flex mt-2 gap-x-2 flex-row">
<div className="w-[30%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="w-[30%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="w-[10%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
</div>
</div>
<div className="flex flex-col mr-[19px]">
    
<div className="w-[100%] h-7 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="flex mt-2 gap-x-2 flex-row">
<div className="w-[30%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="w-[30%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="w-[10%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
</div>
</div>
<div className="flex flex-col mr-[19px]">
    
<div className="w-[100%] h-7 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="flex mt-2 gap-x-2 flex-row">
<div className="w-[30%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="w-[30%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="w-[10%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
</div>
</div>
<div className="flex flex-col mr-[19px]">
    
<div className="w-[100%] h-7 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="flex mt-2 gap-x-2 flex-row">
<div className="w-[30%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="w-[30%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="w-[10%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
</div>
</div>
<div className="flex flex-col mr-[19px]">
    
<div className="w-[100%] h-7 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="flex mt-2 gap-x-2 flex-row">
<div className="w-[30%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="w-[30%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
<div className="w-[10%] h-5 animate-pulse bg-[#2b2b2b]  rounded"/>
</div>
</div>
</div>
</>}

            
        </div>
    )
}


const Desktop3 = ({ w }) => {
    const [dat, setDat] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/innovations');
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    const firstFiveData = data.ddf.slice(0, 5); // Get the first 5 elements
                    setDat(firstFiveData); // Update the state with the first 5 elements
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('An error occurred while fetching data', error);
            }
        };

          fetchData();
       
    }, []);

    useEffect(() => {
        // Here, you can see the updated dat state (which contains the first 5 elements)
        console.log('Updated dat:', dat);
    }, [dat]); // This effect will run when dat changes


    return (
        <div className="table-container w-[340px] min-h-[464px] md:min-h-[46px] mt-[65px] md:mt-[0px] mx-auto md:h-[425px] md:w-[667px] flex-col items-end">

            <div className="flex flex-row items-center ml-[15px] mt-[30px] md:ml-6 md:mt-9 md:mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="3" fill="#B9B9B9" className="animate-pulse" />
                    <circle cx="7" cy="7" r="6.5" stroke="#B9B9B9" className="animate-pulse" />
                    <circle cx="7" cy="7" r="4.5" stroke="#B9B9B9" />
                </svg>
                <h2 className="mx-2">Latest posts</h2>
            </div>
            {w > 768 ? <Herotablepc dat={dat} /> : <Herotablemob dat={dat} />}
        </div>

    );
};

export default Desktop3;
