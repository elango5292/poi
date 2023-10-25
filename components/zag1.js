"use client";

import Image from "next/image";

export default function () {
  return (
    <div>
      <div className="hidden md:flex mt-9 flex-col w-[90%]  md:w-[514px]">
        <div className="w-full zag1box  md:h-[426px] relative relative flex justify-center items-center">
          <div
            className="w-full h-full blur-lg absolute z-0"
            style={{
              background:
                "linear-gradient(72deg, rgba(0, 0, 0, 0.00) 33.39%, #6B6B6B 49.55%, rgba(0, 0, 0, 0.00) 65.7%)",
            }}
          />
          <div className="z-10 relative">
            <Image
              src="/posts.webp"
              alt="My image"
              style={{ transform: "rotate(-15.235deg)" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 431.75px, 33vw"
              className="w-[431px] h-[272px]"
              width={0}
              height={272}
            />
          </div>
        </div>
        <div className="flex-col md:mt-[30px]">
          <h1 className="md:text-[40px] md:mb-[10px] text-[40px] font-bold md:text-right tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999]">
            Blockchain backed
          </h1>
          <p className=" land3tenew md:text-[20px] font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-black">
            Blockchain-backed records stand as your immutable proof, ensuring
            your ideas remain protected.
          </p>
        </div>
      </div>

      <div className="flex md:hidden mt-9 flex-col w-[90%] mx-auto  md:w-[514px]">
        <div className="w-full zag1box h-[230px]  relative relative flex justify-center items-center">
          <div
            className="w-full h-full blur-lg absolute z-0"
            style={{
              background:
                "linear-gradient(72deg, rgba(0, 0, 0, 0.00) 33.39%, #6B6B6B 49.55%, rgba(0, 0, 0, 0.00) 65.7%)",
            }}
          />
          <div className="z-10 relative">
            <Image
              src="/posts.webp"
              alt="My image"
              style={{ transform: "rotate(-15.235deg)" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 431.75px, 33vw"
              className="w-auto h-[180px]"
              width={0}
              height={0}
            />
          </div>
        </div>
        <div className="flex flex-row mx-auto  mt-[46px]">
          <h1 className="w-[40%] text-[27px] font-bold text-right tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999]">
            Record anything
          </h1>
          <p className=" land3tenewM ml-[18px] md:text-[20px] w-1/2 font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-black">
            Effortlessly record and safeguard your creative concepts, from
            groundbreaking research findings to spontaneous ideas.
          </p>
        </div>
      </div>
    </div>
  );
}
