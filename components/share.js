"use client"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useToast } from "@/components/ui/use-toast"
import {useState,useEffect,useRef} from "react";
import { MdIosShare } from "react-icons/md";

export default function ShareButton({ textToShare,tostmessage }){
    const [copied, setCopied] = useState(false);
    const { toast } = useToast()
    const timerId = useRef(null);
    const handleCopyClick = () => {
      setCopied(true);
    };

    useEffect(() => {

          timerId.current = setTimeout(() => {
            setCopied(false);
          }, 3000);

      return () => {
          clearTimeout(timerId.current);
      };
  }, [copied]);
  
    return (
    <>
      <CopyToClipboard text={textToShare}  onCopy={()=>handleCopyClick()}>
  
  <button  variant="outline"
  onClick={() => {
    toast({
      description: tostmessage,
      duration : 3000
    })
  }}>
    {!copied ? <div className=' w-fit px-2 pt-2 pb-3' style={{ background: 'linear-gradient(180deg, #292929 0%, #0A0A0A 100%)',borderRadius:"3px",position:"relative",overflow:"hidden"}}><MdIosShare color="#979797" className='h-5 w-auto'/><div className='nonloading-border'/></div> : <div className=' w-fit px-2 pt-2 pb-3 ' style={{ background: 'linear-gradient(159deg, #222 12.09%, #0C0C0C 87.38%)',borderRadius:"3px",position:"relative",overflow:"hidden"}}><MdIosShare color="#565656" className='h-5 w-auto'/><div className='loading-border'/></div>
  }
  </button>
  </CopyToClipboard>

  
  </>
    );
  };
