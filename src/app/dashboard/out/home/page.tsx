'use client'
import { AuthContext } from "@/app/contexts/auth/AuthContext"
import { useRouter } from "next/navigation"
import { useContext } from "react"

export default function Page() {

    const router = useRouter()
    const { state:{logged} } = useContext( AuthContext )
    const navigateLogin = () => {
        router.push('/dashboard/out/login')
    }
    const navigateMovies = () => {
        router.push('/dashboard/in/movies')
    }
   
    if(!logged) navigateLogin()
    if(logged) navigateMovies()

    return(
        <div>
            <span className="loader"></span>
        </div>
    )
}