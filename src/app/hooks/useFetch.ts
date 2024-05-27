export async function registerUser(name:String ='prueba1', email:String = 'prueba2', password:String ='prueba1') {
    console.log({
        name, email, password
    })
    try {
        const resp = await fetch('https://moviesapiassembler-production.up.railway.app/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({
                name,
                email,
                password
            })
        })
        console.log(resp)
        const data = await resp.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return error
    }
}


export async function getUsers() {
    try {
        const resp = await fetch('https://moviesapiassembler-production.up.railway.app/user')
       
        const data = resp.json()
        return data
    } catch (error) {
        return error
    }
   
}


export async function getUserByEmail(email:String) {
    try {
        const users = await getUsers()
        
        const user = users.find( x => x.email === email)
      
        return user
    } catch (error) {
        
        return error
    }
}


export async function addMovie( name:String, genre:String, imgUrl:String ){
    try {
        const data = {
            name,
            genre, 
            image: imgUrl
        }
        const url = 'https://moviesapiassembler-production.up.railway.app/movie'
        const resp = await fetch(url, {
            method: 'POST', // Método HTTP que se va a usar para la solicitud
            headers: {
              'Content-Type': 'application/json' // Especifica que los datos se envían en formato JSON
            },
            body: JSON.stringify(data) // Convierte el objeto data a una cadena JSON
          })
          return resp
    } catch (error) {
        return error
    }
}
