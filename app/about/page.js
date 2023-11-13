"use client"

import Image from 'next/image'
import style from "./style.module.css";
import Footer from "./../../components/footer"

export default function verify() {
  return(  <div>  <div class="min-h-[70vh] mt-[83px] flex flex-col w-[90vw] md:w-[606px] mx-auto">
  <h1 class="md:text-[35px] text-[25px] md:text-center text-white font-bold mb-4 md:mb-8">
  What is it?
  </h1>
  <p className={`text-white md:text-center  ${style.para}`}>
  POI is a platform that records and protects your ideas and innovations using blockchain technology. With POI, you can securely share your ideas with others without worrying about losing ownership. The blockchain ensures that your ideas are immutably recorded, giving you peace of mind when collaborating, seeking feedback, or publishing your innovations. Your ideas remain yours, safeguarded by our platform.
  </p>
  <Image
      src="/ccube.webp"
      width={541}
      height={0}
      alt="Cube design" className="mt-2 mx-auto max-w-[90%] h-[auto]"
    />
</div>  <Footer/> </div>);
}
