"use client";
import Zag1 from "../components/zag1.js";
import Zag2 from "../components/zag2.js";
export default function () {
  return (
    <div>
      <div className=" hidden md:flex mt-[35px] md:mt-[119px] pt-[145px] w-screen threecontainerzig">
        <div className="flex mx-auto justify-center flex-row w-full gap-x-10">
          <Zag1 />
          <Zag2 />
        </div>
      </div>

      <div className=" flex md:hidden mt-[119px] pt-[35px] w-screen threecontainerzig">
        <div className="flex mx-auto justify-center flex-col w-full">
          <Zag1 />
          <Zag2 />
        </div>
      </div>
    </div>
  );
}
