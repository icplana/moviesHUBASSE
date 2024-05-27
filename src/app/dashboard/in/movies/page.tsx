
import Link from 'next/link'


async function getData() {
    const res = await fetch('http://localhost:4000/movie')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Page() {

   
    const movies = await getData()

    


    return(
    <>
        <div className="flex flex-wrap">
            {movies.map( movie => {
            
                return(
                    <div className="min-w-96 max-w-3xl w-1/2 p-5 mx-auto" key={movie.id}>
                         <h3 className="text-3xl">{movie.name}</h3>
                         <img className="rounded-xl" src={movie.image} alt={movie.name + "image"} />
                          
                          <p className="italic">{movie.genre}</p>
                         
                    </div>
                )
            })}

        </div>
        <Link className="bg-white rounded-md px-3 py-2 font-bold mb-5 text-black ms-6" href="/dashboard/in/addMovie">Add Movie</Link>
    </>
    )
}