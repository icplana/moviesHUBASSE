
import Link from "next/link";


export default function Home() {    
  return (
    
      <main className="flex min-h-screen flex-col items-center p-24">
        <h3 className="text-4xl">WELCOME</h3>
        <div className="mt-8 flex gap-6">
          <Link href="/dashboard/out/login" className="rounded border border-white p-2 text-white hover:text-black hover:bg-white">Login</Link>
          <Link href="/dashboard/out/register" className="rounded border border-white p-2 text-white hover:text-black hover:bg-white">Register</Link>          
        </div>
      </main>
    
  );
}
