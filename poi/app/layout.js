import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "components/nav"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "POI",
  description: "Proof of Innovation",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />

        
        
       

        {/* <div className=" overflow-hidden absolute w-full blur-3xl z-[-1]">
                <div
                    className="aspect-[19/29] md:aspect-[1355/700] bg-gradient-to-tr from-[#57b53f] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            "polygon(45% 47%, 75% 17%, 79% 45%, 66% 68%, 76% 91%, 23% 81%, 14% 48%, 30% 13%)",
                    }}
                />
            </div> */}
            <div className="mt-24">
        {children}
        </div>
      </body>
    </html>
  );
}
