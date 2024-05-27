'use client'
import { useReducer } from "react"
import { authReducer } from "./authReducer"
import { AuthContext } from './AuthContext';
import { types } from "./types"
import { useRouter } from "next/navigation";




const initialState =  {
  logged: false,
  user: null
}


export const AuthProvider = ({ children }) => {

const router = useRouter()

const navigateMovies = () => {
  router.push('/dashboard/in/movies')
}

  const [ state, dispatch ] = useReducer( authReducer, initialState )

  const login = async ( email =  '', name:String, id:String, favList = '' ) => {
    const action = {
      type: types.login,
      payload: { 
        id,
        name,
        email,
        favList 
      },
    }
    navigateMovies()
    dispatch( action )
  }

  const logout = async () => {
    const action = { type: types.logout }
    dispatch( action )
  }

  const updateFavList = async ( favList ) => {
    const action = {
      type: types.updateFavList,
      payload: favList      
    }

    dispatch( action )
  }

  const printState = async () => {
    const action = { type: 'printState'}
    dispatch(action)
  }



  return (
    <AuthContext.Provider value={ { state, login, logout, updateFavList, printState } }>
        { children }
    </AuthContext.Provider>
  )
}