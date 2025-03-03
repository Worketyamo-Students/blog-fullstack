import React from 'react'
import { FaTrashArrowUp } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom'


import '../../App.css'
interface IdataGet{
    titre: string,
    content: string,
    auteur: string,
    senDate: string,
    idEdit: string,
    idDelete: string
}


function GetPosts({titre, content, auteur, senDate, idEdit, idDelete}:IdataGet) {
  return (
    <div  className='w-[45%] h-[60%] flex flex-col rounded-2xl shadow-xl overflow-clip overflow-x-auto'>
        
        <div className='flex-[1] flex flex-col gap-[3rem] p-5 text-justify'>
            <h1 className='text-[3rem] font'>{titre}</h1>
            <p className='text-[1.5rem] poppins'>{content}</p>
        </div>

        <div className='flex-[1]  flex justify-between items-end text-justify p-5'>
            <div className='flex gap-[2rem] text-[2.2rem]'>
            
            <Link to={idEdit}><AiFillEdit  className='cursor-pointer'/></Link>

            <Link to={idDelete}><FaTrashArrowUp className='cursor-pointer'/></Link>

            </div>

            <div>
            <h2 className='text-[1.5rem] font text-blue-400'><span className='underline font-extrabold text-black'>Auteur :</span>  {auteur}</h2>
            <p className='text-[1.5rem] font text-blue-400'><span className='underline font-extrabold text-black'>Date de publication: </span> {senDate}</p>
            </div>
        </div>

    </div>
  )
}

export default GetPosts
