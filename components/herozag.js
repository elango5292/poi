import Zag1 from "../components/zag1.js";
import Zag2 from "../components/zag2.js";
export default function () {
  return (
    <div>
      <div className=" flex md:mt-[39px] mt-[119px] pt-[35px] md:pt-[145px] md:w-screen threecontainerzig">
        <div className="flex mx-auto justify-center md:mb-[49px] flex-col md:flex-row w-full md:gap-x-10">
          <Zag1 />
          <Zag2 />
        </div>
      </div>

   
    </div>
  );
}
