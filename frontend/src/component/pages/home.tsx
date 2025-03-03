import Navbar from './navbar'
import { Link } from 'react-router-dom'
import Sidebar from './sidebar'
import Products from './products'

function Home() {
  return (

     <main className='w-screen h-screen bg-[var(--page-color)] p-[1rem] flex flex-col gap-3'>

            <div className='w-full h-[12%]'>
                    <Navbar title={'Le blog du developpeur'} login={'Get posts'} signin={'Add post'} pathHome={'/createPost'} pathSecond={'/PostLists'}/>
            </div>


            <div className='w-full h-[88%] flex'>

                <div className='flex-1 bg-white shadow-xl'>
                    <Sidebar/>
                </div>


                <div className='flex-[3] pl-[2rem] pr-[2rem]'>

                    <article className='w-full h-full bg-white pl-[1rem] pr-[1rem] pt-[1rem]'>
                            <Products srcImage={'src/assets/banniere-home.svg'} profile={'src/assets/comment-node.svg'} icon={'src/assets/like.svg'} icon2={'src/assets/chat-bubble.svg'} title={'Ghislain Ateba Chouacha'} date={'17 september 2024'}/>
                    </article>

                </div>



            </div>
          
    </main>
  )
}

export default Home
