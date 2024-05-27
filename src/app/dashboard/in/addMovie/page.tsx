'use client'
import { addMovie } from "@/app/hooks/useFetch"
import { useForm } from "@/app/hooks/useForm"
import Link from "next/link"

export default function Page() {

    const { onInputChange, name, genre, imgUrl } = useForm({ name: '', genre: '', imgUrl:'' })

    const onSubmit = async (e) => {
        e.preventDefault()
        
       const resp = await addMovie( name, genre, imgUrl )

       if (resp.status == 201 ) { alert('Movie Added') } else { alert('Something went wrong')}
    }

  return (
    <div className="mt-2 sm:mt-3 text-primary w-screen sm:max-w-lg px-5">
        <h2 className="text-4xl font-light mb-3 text-white2">Add Movie</h2>

        <form onSubmit={ onSubmit } className="mb-4 w-full">
            <div className=" mb-3">
                <label className="block font-semibold text-white2">Name</label>
                <input 
                    type="text"
                    name="name"
                    value={ name }
                    onInput={ onInputChange }
                    className="rounded px-2 py-1 w-full text-black"
                    placeholder="Green mile"
                />
            </div>

            <div className="mb-3">
                <label className="block font-semibold text-white2">Genre</label>
                <input 
                    type="select"
                    name="genre"
                    value={ genre }
                    onInput={ onInputChange }
                    className="rounded px-2 py-1 w-full text-black"
                    placeholder="Drama"
                />
            </div>

            <div className="mb-3">
                <label className="block font-semibold text-white2">Image URL</label>
                <input 
                    type="text"
                    name="imgUrl"
                    value={ imgUrl }
                    onInput={ onInputChange }
                    className="rounded px-2 py-1 w-full text-black"
                    placeholder="Drama"
                />
            </div>

            <input className="bg-white rounded-md px-3 py-2 font-bold mb-2 text-black" type="submit" value="Add" />
        </form>
        <Link className="bg-white rounded-md px-3 py-2 font-bold mb-5 text-black" href="/dashboard/in/movies">Back to movies</Link>
        

        
      


    </div>
  )
}