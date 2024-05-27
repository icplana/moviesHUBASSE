import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";



export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
      
  
    
    return (
        <>
            <header className="w-full border-b-white border-b-2 px-2 py-2">
                <Link href="/dashboard/in/user" className=" border rounded-lg px-2 py-1 hover:bg-white hover:text-black" >My account</Link>
            </header>       
            { children }
        </>
    );
  }
  