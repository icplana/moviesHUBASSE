'use client'
import { AuthContext } from "@/app/contexts/auth/AuthContext"
import { user, users } from "@/app/fakeData"
import { useRouter } from "next/navigation"
import { useContext } from "react"

export default function Page() {

    const { state:{logged}, logout } = useContext( AuthContext )
    const router = useRouter()
    const navigateLogin = () => {
        router.push('/dashboard/out/login')
    }
     
    if(!logged) navigateLogin()
    

    return(
    <>
        <h3 className="mx-2 mt-2 text-2xl">Users List:</h3>
        <div className=" mx-2 max-w-4xl flex flex-wrap mt-2 gap-x-1">
            {
                users.map( user => {
                    return (
                        <div className="mx-auto p-2 border rounded-lg mb-3" key={user.id}>
                            <p>Name: {user.name}</p>
                            <p>UID: {user.id}</p>
                            <p>Email: {user.email}</p>
                            <p>Password: {user.password}</p>
                            <p>Liked Movies: {user.movies.join(', ')}</p>
                        </div>
                    )
                })
            }
            
        
        </div>
    </>
    )
}