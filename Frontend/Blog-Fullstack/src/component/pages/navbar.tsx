import React from 'react'
import '../../App.css'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'




interface Iheader{
    title: string,
    login: string,
    signin: string,
    pathHome:  string,
    pathSecond: string
}


function Navbar({title, login, signin, pathHome, pathSecond}:Iheader) {
  return (

    <div className='w-full h-full bg-[var(--main-color)] flex'>

        <div className='flex-1 flex items-center pl-[2rem] gap-4'>
                <img src="src/assets/logo.svg" alt="" />
                <h1 className='text-[4rem] font text-white'>{title}</h1>
        </div>

        <div className='flex-1 flex justify-end pr-4 gap-8 items-center'>

           
        <Link to={pathHome}><Button variant="destructive">{signin}</Button></Link>
        <Link to={pathSecond}><Button variant="destructive" size={'default'} className='popins'>{login}</Button></Link>

        </div>



    </div>
  )
}

export default Navbar
