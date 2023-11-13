"use client";

import React, { useEffect, useState } from 'react';
import networks from "../lib/networks"
import Link from "next/link";
import humanTime from "../lib/humantime"

function Herotablepc({ dat }) {
    return (
        <table className="custom-table w-full ">
            <tr className="text-left htr ">
                <th className="hth py-2 pl-9">Title</th>
                <th className="hth py-2 pl-2">Author</th>
                <th className="hth py-2 pl-2">Date</th>
                <th className="hth py-2 pl-2">Chain</th>
            </tr>
            {dat.map((item, index) => (
                <tr key={item.id} className={`htr leading-[2.8] ${index === dat.length - 1 ? 'border-b-0' : 'border-b'}`}>

                    <td className="title-cell htd py-2 pl-9">
                        <div className="  title-cell md:truncate md:max-w-[265px]"><Link href={`/innovations/${item.hash}/?chain=${item.chain}`}>{item.title}</Link></div>
                    </td>
                    <td className="author-cell htd text-[0.8em] md:truncate md:max-w-[85px] p-2">{item.author}</td>
                    <td className="date-cell htd text-[0.8em] p-2">{humanTime(item.date)}</td>
                    <td className="cain-cell htd p-2 pl-2"><img src={`/cryptologo/${networks(item.chain, "logo")}`} alt="Your SVG" className="h-[28px] grayscale" /></td>
                </tr>
            ))}
        </table>

    )
}

// {dat.map((item, index) => (
//     <h2>{item.title}</h2>
// ))}

function Herotablemob({ dat }) {
    return (
        <div className="ml-[19px] mt-[39px]">

{dat.map((item, index) => (
   <div className="flex flex-col mt-[21px]">
   <h2 className="">{item.title}</h2>
   <div className="flex flex-row mobtabletitle items-center">
       <p className="mobtableauth mr-[11px]">{item.author}</p>
       <p className="mobtabledate mr-[14px]">{humanTime(item.date)}</p>
       <img src={`/cryptologo/${networks(item.chain, "logo")}`} alt="Polygon" className="h-[13px] w-auto grayscale" />
   </div>
   <div className="w-[302px] mt-[21px] h-[1px] bg-[#2E2E2E]" />
</div>
))}

            
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
