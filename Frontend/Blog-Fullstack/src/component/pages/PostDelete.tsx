
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function PostDelete() {

    const {id} = useParams()

    const DeleteData = async ()=>{
        try {
            const deleteBlog = await axios.delete(`http://localhost:3000/users/blogs/delete/${id}`)
            if (!deleteBlog) {
                console.log('Impossible de supprimer ce blog');   
            }
            
        } catch (error) {
            console.error(error)
        }
    }
    DeleteData()
    
    return(
        <>
            <main className='w-screen h-screen flex flex-col items-center gap-10'>

                <div className='w-[50%] p-[8rem] flex flex-col items-center gap-10 bg-gray-300'>

                        <h1 className='text-[4rem] text-green-500'>Suppression du blog effectue avec succes !!!</h1>
                        <h2 className='text-[2rem]'>id du Blog : <span className='text-red-700'>{id}</span></h2>

                </div>


                <div>
                    <Link to={'/PostLists'}><Button variant={'default'}>Revenir aux blogs</Button></Link>
                </div>






            </main>
        
        </>
    )

}

export default PostDelete
