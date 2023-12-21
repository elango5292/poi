import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "components/nav"
import { Toaster } from "../components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "POI",
  description: "Proof of Innovation",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>

        <Navbar />

        
        
      
            <div >
        {children}
        
        </div>
        <Toaster duration = {3000} />
      </body>
      
    
       
    </html>
  );
}
