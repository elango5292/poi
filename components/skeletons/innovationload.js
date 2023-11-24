
import ContentLoader from "react-content-loader"
import { MdHideSource } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


  function Hy(){
    return (<div >
   

    <div className=" bg-transparent border-[#2E2E2E] hover:cursor-pointer hover:bg-[#0B0B0B] hover:border-[#DADADA] rounded-[4px] border-[1px] my-1 py-3 pl-4">
    <ContentLoader 
    speed={2}
    
    viewBox="0 0 476 70"
    backgroundColor="#171717"
    foregroundColor="#3b3b3b"
   
  >
    <rect x="0" y="0" rx="3" ry="3" className="h-[1em] md:h-[0.75em] w-[40%]"  /> 
    <rect x="0" y="25" rx="3" ry="3" className="h-[1em] md:h-[0.9em] w-[95%]"  /> 
    <circle cx="11" cy="60" r="8" />
    <rect x="26" y="52.5" rx="3" ry="3" className="h-[1em] md:h-[0.9em] w-[30%]" /> 
  </ContentLoader>
    </div>

  </div>)
  }
function huh(){
    return(<Hy/>)
}
export default huh

{/* <div className=" mt-24 flex flex-col flex-wrap bg-transparent border-[#2E2E2E] hover:cursor-pointer hover:bg-[#0B0B0B] hover:border-[#DADADA] rounded-[4px] border-[1px] my-1 py-4 pl-4">
<>
              <p className="font-light text-[#DADADA] tracking-[0.2px]">Wed, 15 Nov 2023 08:33:00 GMT</p>
          </>
          <>
              <h1 className="font-bold tracking-[-0.01px] text-[#DADADA] mr-2 my-2">Chelsea FC face new questions over how</h1>
          </>
          <>
              {true ? (
                  <p className="mr-2">
                      <CgProfile className="mr-2 font-medium text-[#DADADA] tracking-[-0.085px] inline" />
                      QWERTYUIOP
                  </p>
              ) : (
                      <p className="mr-2">
                          <MdHideSource className="mx-2 inline text-[#DADADA]" /> "Annonymous"
                      </p>
                  )}
          </>
</div> */}