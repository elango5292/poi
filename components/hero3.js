import Cryptologo from "./cryptologos"
import Hero31 from "./hero31"
import Heroa2 from "./../components/heroa2"
export default function hero3({w}){
return(
    <div className="md:pt-[116px] pt-[40px] threecontainer">
    <div className="flex flex-col md:justify-center md:items-center md:flex-row  w-screen  overflow-hidden ">
        
        <Hero31/>  
        <Heroa2 w={w}/>
     
    </div>
    </div>
)
}