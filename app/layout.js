
import "./globals.css";
import  Navbar from "@/components/Navbar.js";
import Footer from  "@/components/Footer.js";
import { title } from "process";

export const metadata = {
          title:"Next.js Practice",
          description:"I am learing next.js"
    };

export default function RootLayout({ children }) {
     

  return (
    <html lang="en">
      
      <body >
        <Navbar />
        <main className="my-36">
           {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
