import Navbar from './navbar'
import Sidebar from './sidebar'
import { Button } from "@/components/ui/button"
import '../../App.css'




function About() {
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

                    <article className='flex gap-4 w-full h-full pl-[1rem] pr-[1rem] pt-[1rem]'>

                            <div className='flex-1 flex flex-col gap-4'>

                                <div className='bg-white flex-1 flex items-center flex-col gap-5'>

                                    <div className='w-[60%] h-[60%]  rounded-[50%]'><img src="src/assets/about.png" alt="about" className='h-full w-full object-scale-down'/></div>
                                    <h1 className='font text-[2rem]'>Ghislain Ateba Chouacha</h1>
                                    <h2 className='popins text-gray-700 text-[1.5rem]'>Full Stack developer</h2>
                                    <h2 className='popins text-gray-700 text-[1.5rem]'>Bay Area, Yaounde, CA</h2>

                                    <div className='flex gap-8'>
                                    <Button variant={"default"}>Follow</Button>
                                    <Button variant={"secondary"}>Message</Button>
                                    </div>


                                </div>

                                <div className='flex-1 bg-white gap-2'>

                                    <div className='w-full h-[20%] flex items-center justify-between  p-3'>
                                        <img src="src/assets/Cypher.svg" alt="worldimage" className='w-[15%] h-[80%]'/>
                                        <span className='text-[1.2rem]'>https://ghislano-dev-genuis.com</span>
                                    </div>

                                    <div className='w-full h-[20%] flex items-center justify-between  p-3'>
                                        <img src="src/assets/icons-github.svg" alt="githubimage" className='h-[100%]'/>
                                        <span className='text-[1.2rem]'>@Ghislano26</span>
                                    </div>

                                    <div className='w-full h-[20%] flex items-center justify-between  p-3'>
                                        <img src="src/assets/twitter.png" alt="twitterimage" className='w-[8%] h-[90%]'/>
                                        <span className='text-[1.2rem]'>Ghislano-dev</span>
                                    </div>

                                    <div className='w-full h-[20%] flex items-center justify-between  p-3'>
                                        <img src="src/assets/instagram.png" alt="instarimage" className='w-[8%] h-[80%]'/>
                                        <span className='text-[1.2rem]'>https://ghislano-dev-genuis.com</span>
                                    </div>

                                    <div className='w-full h-[20%] flex items-center justify-between  p-3'>
                                        <img src="src/assets/icons-facebook.svg" alt="worldimage" className='w-[8%] h-[90%]'/>
                                        <span className='text-[1.2rem]'>https://ghislano-dev-genuis.com</span>
                                    </div>

                                </div>


                            </div>

                            
                            {/*  */}

                            <div className='flex-[2] flex flex-col bg-white gap-[2rem]'>

{/* About firsname and lastname */}
                                <div className='w-full h-[40%] text-[1.5rem]  p-2 flex flex-col justify-center'>
                                    <div className='w-full h-[30%] p-1 flex '>
                                        <div className='flex-1  items-center  flex gap-[5rem]'>
                                            <label htmlFor="" className='popins font-bold text-blue-900'>First Name : </label>
                                            <span className='text-gray-500 font text-[1.8rem]'>Ateba Chouacha</span>
                                        </div>
                                        <div className='flex-1  items-center flex gap-[5rem]'>
                                            <label htmlFor="" className='font-bold text-blue-900'>Last Name : </label>
                                            <span className='text-gray-500 font text-[1.8rem]'>Ghislain</span>
                                        </div>
                                    </div>

{/* About gender and contacts */}
                                    <div className='w-full h-[30%] p-1 flex  '>
                                        <div className='flex-1  items-center  flex gap-[5rem]'>
                                            <label htmlFor="" className='opins font-bold text-blue-900'>Gender : </label>
                                            <span className='text-gray-500 font text-[1.8rem]'>Male</span>
                                        </div>
                                        <div className='flex-1  items-center flex gap-[5rem]'>
                                            <label htmlFor="" className='font-bold text-blue-900'>Contact : </label>
                                            <span className='text-gray-500 font text-[1.8rem]'>(+237) 6808 786 40</span>
                                        </div>
                                    </div>

{/* About gender and contacts */}
                                    <div className='w-full h-[30%] p-1 flex  '>
                                        <div className='flex-1  items-center  flex gap-[5rem]'>
                                            <label htmlFor="" className='font-bold text-blue-900'>Email : </label>
                                            <span className='text-blue-500 font text-[1.8rem]'>ghislainatebachouacha@gmail.com</span>
                                        </div>
                                        <div className='flex-1  items-center flex gap-[5rem]'>
                                            <label htmlFor="" className='font-bold text-blue-900'>Birthday : </label>
                                            <span className='text-gray-500 font text-[1.8rem]'>Jan 28, 2006</span>
                                        </div>
                                    </div>

                                
                                </div>





                                <div className='w-full h-[60%]  flex pt-[12rem] p-2'>

                                      <div className='flex-1 flex flex-col gap-4'>
                                            <h1 className='font text-[2.5rem] text-blue-900'>Experience</h1>
                                            <div>
                                                <h2 className='text-[1.7rem] text-blue-500'>Owner at her Company Inc.</h2>
                                                <p className='text-[1.2rem] text-gray-400'>April 2025 - Now</p>
                                            </div>
                                            <div>
                                                <h2 className='text-[1.7rem] text-blue-500'>Owner at her Company Inc.</h2>
                                                <p className='text-[1.2rem] text-gray-400'>April 2025 - Now</p>
                                            </div>
                                            <div>
                                                <h2 className='text-[1.7rem] text-blue-500'>Owner at her Company Inc.</h2>
                                                <p className='text-[1.2rem] text-gray-400'>April 2025 - Now</p>
                                            </div>
                                            <div>
                                                <h2 className='text-[1.7rem] text-blue-500'>Owner at her Company Inc.</h2>
                                                <p className='text-[1.2rem] text-gray-400'>April 2025 - Now</p>
                                            </div>
                                      </div>

                                      <div className='flex-1 '>
                                      <h1 className='font text-[2.5rem] text-blue-900'>Education</h1>
                                            <div>
                                                <h2 className='text-[1.7rem] text-blue-500'>Owner at her Company Inc.</h2>
                                                <p className='text-[1.2rem] text-gray-400'>April 2025 - Now</p>
                                            </div>
                                            <div>
                                                <h2 className='text-[1.7rem] text-blue-500'>Owner at her Company Inc.</h2>
                                                <p className='text-[1.2rem] text-gray-400'>April 2025 - Now</p>
                                            </div>
                                            
                                            
                                            

                                      </div>  


                                </div>



                            </div>



                    </article>

                </div>



            </div>
          
    </main>
  )
}

export default About
