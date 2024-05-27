'use client'
import { useContext } from "react"
import { signInEmail, signInWithGoogle } from "../../../Firebase/firebase"
import { useForm } from "../../../hooks/useForm"
import Link from "next/link"
import { AuthContext } from "../../../contexts/auth/AuthContext"
import { getUserByEmail, registerUser } from "@/app/hooks/useFetch"








export default function Page() {
 

    const { onInputChange, email, password } = useForm({ email: '', password: '' })
    const { login, printState } = useContext( AuthContext )
    
    const onSubmit = async (e:Event) => {
        e.preventDefault()

        const user = await signInEmail( email, password )
        
        if ( user.auth ){
            console.log(user)
            // const favList = await getFavoritesDB( user.uid )
            const ourUser = await getUserByEmail(user.email)
            console.log(ourUser)
            login( user.email, ourUser.name, user.uid )
            
  
        } else if ( user.code === 'auth/invalid-credential'){
            alert('Invalid credentials')
        }
    }

    const onGoogleLogin = async (e:Event) => {
        e.preventDefault()
        const user = await signInWithGoogle()
       
        if ( user.auth ){
            // console.log(user)
            // const favList = await getFavoritesDB( user.uid )
            
            login( user.email, user.displayName, user.uid )
            try {
               registerUser(user.displayName, user.email, 'googleLogin') 
            } catch (error) {
                console.log(error)
            }
            
        } 

    }
  return (
    <div className="mt-2 sm:mt-3 text-primary w-screen sm:max-w-lg px-5">
        <h2 className="text-4xl font-light mb-3 text-white2">Login</h2>

        <form onSubmit={ onSubmit } className="mb-4 w-full">
            <div className=" mb-3">
                <label className="block font-semibold text-white2">Correo</label>
                <input 
                    type="email"
                    name="email"
                    value={ email }
                    onInput={ onInputChange }
                    className="rounded px-2 py-1 w-full text-black"
                    placeholder="email@email.com"
                />
            </div>

            <div className="mb-3">
                <label className="block font-semibold text-white2">Contraseña</label>
                <input 
                    type="password"
                    name="password"
                    value={ password }
                    onInput={ onInputChange }
                    className="rounded px-2 py-1 w-full text-black"
                    placeholder="******"
                />
            </div>

            <input className="bg-white rounded-md px-3 py-2 font-bold mb-2 text-black" type="submit" value="Login" />
        </form>
        

        <button className="bg-white rounded-md px-3 py-2 font-bold mb-4 text-black"  onClick={ onGoogleLogin }>Login with Google</button>
        {/* <button onClick={printState}>printState</button> */}

        <p className="text-white2 mb-1">Do not have an account?</p>
        <Link className="bg-white rounded-md px-3 py-2 font-bold mb-2 block w-fit text-black" href="/dashboard/out/register" >Register</Link>


    </div>
  )
}