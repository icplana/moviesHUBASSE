'use client'
import { AuthContext } from "@/app/contexts/auth/AuthContext"
import { user } from "@/app/fakeData"

import { useRouter } from "next/navigation"
import { useContext } from "react"



export default function Page() {

    const router = useRouter()
    const { state:{logged, user }, logout, printState } = useContext( AuthContext )
    const navigateLogin = () => {
        router.push('/dashboard/out/login')
    }
     
    if(!logged) navigateLogin()
    

    return(
        <div className=" mx-2 max-w-3xl">
            <p>Name: {user ?user.name :'No name'}</p>
            <p>Email: {user ?user.email :'No email'}</p>
            {/* <p>Liked Movies: {user.movies.join(', ')}</p> */}
            <button className="my-2 border rounded-lg px-2 py-1 hover:bg-white hover:text-black" 
                onClick={() => {
                    logout();
                    navigateLogin()
                }}
            >Log out</button>
            <button onClick={printState}>printState</button>
        </div>
    )
}