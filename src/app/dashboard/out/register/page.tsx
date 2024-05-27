'use client'
import { useContext, useRef } from "react"

import Link from "next/link"


import { useForm } from "../../../hooks/useForm"
import { registerEmail } from "../../../Firebase/firebase"
import { AuthContext } from "@/app/contexts/auth/AuthContext"
import { useRouter } from "next/navigation"
import { registerUser } from "@/app/hooks/useFetch"





export default function Page() {

    const { login, state } = useContext(AuthContext)
    const router = useRouter()
    const navigateMovies = () => {
        router.push('/dashboard/in/movies')
    }
   
    if(state.logged) navigateMovies()
    
    const onRegister = async (e:Event) => {
      e.preventDefault()
        let validation = true
        
        if ( nombre.length < 1 ) {
            validation = false
            showNameAlert()
        }
        if ( password.length < 6 ) {
            validation = false
            showPasswordlAlert()
        }
        if ( email.length < 1 || !email.includes('@')) {
            validation = false
            showEmailAlert()
        }


        if ( validation === true ) {
            
           const resp = await registerEmail( email, password )
          
           if ( resp.auth ) {
                registerUser( nombre, resp.email, password )
                succesAlert.current.classList.remove('hidden')
                login(resp.email, nombre, resp.uid)
                navigateMovies()
                
                
           }
           else{
            showErrorAlert()
           }
           

            
        }
    }
    
    const handleInputChange = (e:Event) => {
        onInputChange(e)
        
        // if ( nombre.length > 1 ) nameAlert.current.classList.add('d-none')
        // if ( password.length > 4 ) passwordAlert.current.classList.add('d-none')
        // if ( email.length > 1 && email.includes('@')) correoAlert.current.classList.add('d-none')
    
    }

    const nameAlert = useRef(null)
    const correoAlert = useRef(null)
    const passwordAlert = useRef(null)
    const succesAlert = useRef(null)
    const errorAlert = useRef(null)
   

    const { onInputChange, email, password, nombre } = useForm({ email: '', password: '' , nombre: '' })

    

    const showNameAlert = () => {
      nameAlert.current.classList.remove('hidden')
      setTimeout(() => {        
        nameAlert.current.classList.add('hidden')
      }, 2800);
    }

    const showEmailAlert = () => {
      correoAlert.current?.classList.remove('hidden')
      setTimeout(() => {          
        correoAlert.current.classList.add('hidden')
      }, 2800);
    }
    const showPasswordlAlert = () => {
      passwordAlert.current.classList.remove('hidden')
      setTimeout(() => {        
        passwordAlert.current.classList.add('hidden')
      }, 2800);
    }
  
    const showErrorAlert = () => {
      errorAlert.current.classList.remove('hidden')
      setTimeout(() => {        
        errorAlert.current.classList.add('hidden')
      }, 2800);
    }
  
    
  

  return (
    <div className="mt-2 sm:mt-3 text-primary w-screen sm:max-w-lg px-5">
      <h3 className='text-4xl font-light mb-3 text-white2'>Register</h3>
    <form className='' onSubmit={onRegister}>
      
        <div className='mb-4 w-full'>          
          <label htmlFor="nombre" className='block font-semibold text-white2'>Name</label>
          <input 
            type="text" 
            id='nombre'
            name='nombre' 
            className='rounded px-2 py-1 w-full text-black' 
            placeholder='Michael Smith'
            value={ nombre }
            onInput={ onInputChange }            
          />
          <div className="bg-softRed mt-2 rounded -md px-2 py-1 text-sm font-semibold hidden text-red-400" ref={nameAlert}>
            Invalid name
          </div>
        </div>
      
        <div className=''>          
          <label htmlFor="email" className='block font-semibold text-white2'>Email</label>
          <input 
            type="email" 
            id='email'
            name='email' 
            className='rounded px-2 py-1 w-full text-black' 
            placeholder='email@email.com'
            value={ email }
            onInput={ handleInputChange }            
          />
           <div className=" bg-softRed mt-2 rounded -md px-2 py-1 text-sm font-semibold hidden text-red-400" ref={correoAlert}>
            Invalid email
          </div>
        </div>


        <div className='mb-4'>
          <label className='block font-semibold text-white2'>Password</label>
          <input 
            type="password" 
            className='rounded px-2 py-1 w-full text-black' 
            placeholder='********'
            name='password'
            value={ password }
            onInput={ handleInputChange }  
          />
           <div className="bg-softRed mt-2 rounded -md px-2 py-1 text-sm font-semibold hidden text-red-400" ref={passwordAlert}>
            Password must have at least 6 characters
          </div>
        </div>

        <button className='bg-white rounded-md px-3 py-2 font-bold mb-4 text-black' >
          Register
        </button>

        <div className="bg-softGreen mt-2 rounded -md px-2 py-1 text-sm font-semibold hidden text-green-400" ref={succesAlert}>
            Succesfull registration

        </div>
        
        <div className="bg-softRed mt-2 rounded -md px-2 py-1 text-sm font-semibold hidden text-red-400" ref={errorAlert}>
            Something went wrong

        </div>



      </form>

      <Link href="/dashboard/out/login" className=" text-white2 underline text-md">I have an account</Link>
    </div>
  )
}