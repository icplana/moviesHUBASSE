
import { getUsers } from "@/app/hooks/useFetch"
import { types } from "./types"

const initialState =  {
    logged: false,
    user: null

}




export const authReducer = ( state = initialState, action ) => {



switch ( action.type ){
        
        case types.login:
            // console.log('test')
            // sessionStorage.setItem( 'state', JSON.stringify({
            //     ...state,
            //     logged: true,
            //     user: action.payload
            // }))
            // const users = await getUsers()
            // const user = await users.find( x => x.email === action.payload.email)

            return {
                ...state,
                logged: true,
                user: action.payload,
                // ourUser: user
            }


        case types.logout:
            

            // sessionStorage.removeItem( 'state' )

            return {
                logged: false
            }

        
           
        // case types.updateFavList:

        //     // sessionStorage.setItem( 'state', JSON.stringify({
        //     //     ...state,
        //     //     logged: true,
        //     //     user: {
        //     //         ...state.user,
        //     //         favList: action.payload
        //     //     }
        //     // }))
        //     return {
        //         ...state,
        //         user: {
        //             ...state.user,
        //             favList: action.payload
                    
        //         }
        //     }
        

        case 'printState':
            console.log( state )

        default:
            return state
    }
}