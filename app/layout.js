import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "components/nav"
// import Footer from "./../components/footer"


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

        
        
      
            <div >
        {children}
        
        </div>
      </body>
      
    
       
    </html>
  );
}
