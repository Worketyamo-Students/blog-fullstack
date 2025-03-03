import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useNavigate, useParams } from 'react-router-dom'

function PostEdit() {

        const id = useParams()
        const redirect = useNavigate()
        const trueId = id.id
        console.log(trueId);


    const [change, setChange] = useState({
        auteur: '',
        titre: '',
        content: ''
    })

    const handleChange = (e:any)=>{
       const {name,value} = e.target;
       setChange(prev => ({
            ...prev,
            [name] : value
       }))
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()

        // try {
        //     axios.put(`http://localhost:3000/users/blogs/modify/${trueId}`, change);
        //     console.log(change);
            
        //     redirect('/PostLists');
        // } catch (error) {
        //     console.log(error);
        // }

       const nodifyData = async ()=>{
        try {
            const newData = await axios.put(`http://localhost:3000/users/blogs/modify/${trueId}`, change)
            redirect('/PostLists');
         } catch (error) {
             console.log(error);
             
         }
         console.log(change);
         
       }
       nodifyData()
    }

        
    useEffect(()=>{
        const fetchDataByID = async () =>{
            try {
                const resId = await axios.get(`http://localhost:3000/users/blogs/${trueId}`)
                console.log(resId.data);
                setChange({
                    auteur : resId.data.auteur,
                    titre : resId.data.titre,
                    content : resId.data.content
                })
                
                


            } catch (error) {
                console.log(error);
                
            }
        }
            fetchDataByID()

    },[id])



  return (
    <div className='flex flex-col gap-[4rem]'>
      
      <div className='w-full bg-[#0706ac] flex-1 flex flex-col items-center gap-[2rem] p-[2rem]'>
            <h1 className='text-[4rem] poppins text-white'>Modification du bog</h1>
            <p className='text-[2rem] text-white'>ID : <span className='text-red-500'>{trueId}</span></p>
      </div>



      <div className="w-full h-[88%] flex justify-center flex-[2]">

            <div className="w-[50%] h-full flex justify-center items-center">
                    <div className="form-container">
                        <form className="form">

                            <div className="form-group">
                                <label htmlFor="text">Enter author</label>
                                <input type="text" id="text" name="auteur" required value={change.auteur} onChange={handleChange}/>
                            </div>


                            <div className="form-group">
                                <label htmlFor="text">Enter Title</label>
                                <input type="text" id="text" name="titre" required value={change.titre} onChange={handleChange}/>
                            </div>
             

                            <div className="form-group">
                                <label htmlFor="textarea">Enter a content</label>
                                <textarea name="content" id="textarea" rows={10} cols={50} required value={change.content} onChange={handleChange}>          

                                </textarea>
                            </div>

                            <button className="form-submit-btn" type="submit" onClick={handleSubmit}>Modify post</button>
                        </form>
                    </div>
    



            </div>


     </div>







    </div>
  )
}

export default PostEdit
