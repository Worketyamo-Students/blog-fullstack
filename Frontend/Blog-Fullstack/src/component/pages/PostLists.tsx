import Navbar from "./navbar";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Products from "./products";
import GetPosts from "./GetPosts";
import axios from "axios";
import React from 'react'
import '../../App.css'

function PostLists() {

  const [blogList, setBlogList] = useState([])
  // const [search, setSearch ] = useState()



  useEffect(()=>{

    const fetchPost = async ()=>{
        try {
         const res = await axios.get('http://localhost:3000/users/blogs')
          setBlogList(res.data)
          console.log(res.data);
          


        } catch (error) {
          console.log(error);
          
        }

    }


    fetchPost()

  }  
  
  
  
  ,[])

  // const handleSearch = (e:any)=>{
  //     const wordSearch = e.target.value.toLowerCase();
  //     console.log(wordSearch);
  //     const resultBlogFilter = blogList.filter((blog)=>{
  //       blog.auteur.toLowerCase().includes(wordSearch)
  //     }
  //     )
  //     setSearch(resultBlogFilter)
      
  // }












  return (
    <main className='w-screen h-screen bg-[var(--page-color)] p-[1rem] flex flex-col gap-3'>

      <div className='w-full h-[12%]'>
            <Navbar title={'Le blog du developpeur'} login={'Add post'} signin={'Home'} pathHome={'/'} pathSecond={'/createPost'}/>
      </div>
          

      <div className='w-full h-[88%] flex'>

      <div className='flex-1 bg-white shadow-xl'>
        <Sidebar/>
      </div>


<div className='flex-[3] pl-[1rem] pr-[1rem] overflow-clip overflow-y-scroll'>
  <div className="w-full flex justify-center p-[2.5rem]">
  <div className="group">
  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>
  <input className="input" type="search" placeholder="Search"/>
</div>


  </div>

    <article className='w-full h-screen pl-[1rem] pr-[1rem] pt-[1rem] flex flex-wrap justify-evenly gap-5' >

        {blogList.map((item, index)=>(
          
          <GetPosts key={index} auteur={item.auteur} titre={item.titre} content={item.content} senDate={item.sendDate} idEdit={`/PostEdit/${item.id}`} idDelete={`/PostDelete/${item.id}`}/>
        ))

        }
    </article>

</div>



</div>
    </main>
  )
}

export default PostLists
