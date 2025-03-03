
import Navbar from "./navbar";
import React, { useState } from 'react'
import '../../App.css'
import { error, log } from "console";
import axios from "axios";







function CreatePost() {

  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleTitle = (e: Event)=>{
    setTitle(e.target.value)
  }

  const handleAuthor = (e: Event)=>{
    setAuthor(e.target.value)
  }
  

  const handleContent = (e: Event)=>{
    setContent(e.target.value)
  }
  
  const dataPost = {
    auteur: author,
    titre: title,
    content: content
  }
  
 const handleSubmit = async (e: Event)=>{
    e.preventDefault()
     try {
       const res = await axios.post('http://localhost:3000/users/create', dataPost)
          console.log(res.data);
          
      
     } catch (error) {
      console.log('voila une erreur pour toi', error);
      
     }


    setAuthor('')
    setTitle('')
    setContent('')
    
 }

 


  return (
    <main className='w-screen h-screen bg-[var(--page-color)] p-[1rem] flex flex-col gap-3'>

      <div className='w-full h-[12%]'>
            <Navbar title={'Le blog du developpeur'} login={'Get posts'} signin={'Home'} pathHome={'/'} pathSecond={'/PostLists'}/>
      </div>

        <div className="w-full h-[88%] flex justify-center">

                <div className="w-[50%] h-full flex justify-center items-center">
                  <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>

                              <div className="form-group">
                                  <label htmlFor="text">Enter author</label>
                                  <input type="text" id="text" name="text" required value={author} onChange={handleAuthor}/>
                              </div>


                              <div className="form-group">
                                  <label htmlFor="text">Enter Title</label>
                                  <input type="text" id="text" name="text" required value={title} onChange={handleTitle}/>
                              </div>
                             

                              <div className="form-group">
                                  <label htmlFor="textarea">Enter a content</label>
                                  <textarea name="textarea" id="textarea" rows={10} cols={50}  required value={content} onChange={handleContent}>          

                                  </textarea>
                              </div>

                      <button className="form-submit-btn" type="submit">Add post</button>
                    </form>
                  </div>
                    



                </div>


        </div>

          
    </main>
  )
}

export default CreatePost
