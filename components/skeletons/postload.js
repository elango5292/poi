
import ContentLoader from "react-content-loader"


const MyLoader = (props) => (
    <ContentLoader 
      speed={2}
      
      viewBox="0 0 1000 1300"
      backgroundColor="#171717"
      foregroundColor="#3b3b3b"
      {...props}
    >

<rect x="0.5" y="0.5" className="h-[106px] w-[100%]  sm:h-[56px] sm:w-[834px]" rx="9.5"/>
<circle  r="35.5" className="sm:hidden translate-x-[45px] translate-y-[187px]" />
<circle  r="20.5" className="hidden sm:block translate-x-[21px] translate-y-[107px] " />
<rect className="h-[66px] w-[40%] sm:h-[36px] translate-x-[107.5px] translate-y-[157.5px] sm:translate-x-[57.5px] sm:translate-y-[91.5px]  sm:w-[328px]"  rx="9.5" />
<rect  className="h-[66px] w-[52%]  sm:h-[32px]  sm:w-[385px] translate-x-[0.5px] translate-y-[248px] sm:translate-x-[0.5px] sm:translate-y-[138px]"  rx="9.5" />
<rect  className="h-[950px] w-[100%] sm:h-[43px]  sm:w-[834px] translate-x-[0.5px] translate-y-[358px] sm:translate-x-[0.5px] sm:translate-y-[205.5px]"  rx="9.5" />
<rect  className="hidden sm:block h-[43px] w-[100%] sm:h-[43px]  sm:w-[834px] translate-x-[0.5px] translate-y-[428px] sm:translate-x-[0.5px] sm:translate-y-[263.5px]"  rx="9.5" />
<rect  className="hidden sm:block h-[43px] w-[100%] sm:h-[43px]  sm:w-[834px] translate-x-[0.5px] translate-y-[498px] sm:translate-x-[0.5px] sm:translate-y-[321.5px]"  rx="9.5" />
<rect  className="hidden sm:block h-[43px] w-[100%] sm:h-[43px]  sm:w-[834px] translate-x-[0.5px] translate-y-[568px] sm:translate-x-[0.5px] sm:translate-y-[379.5px]"  rx="9.5" />
<rect  className="hidden sm:block h-[43px] w-[100%] sm:h-[43px]  sm:w-[834px] translate-x-[0.5px] translate-y-[638px] sm:translate-x-[0.5px] sm:translate-y-[437.5px]"  rx="9.5" />

    </ContentLoader>
  )

function huh(){
    return(<div className="max-w-3xl mt-24 min-h-[70vh] mx-auto p-4 "><MyLoader/></div>)
}
export default huh