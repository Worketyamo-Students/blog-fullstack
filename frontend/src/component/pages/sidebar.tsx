import { Link } from 'react-router-dom'
import '../../App.css'

function Sidebar() {
  return (
    <div className='flex flex-col gap-[5rem] w-full h-full p-[3rem] text-[2.2rem] poppins bg-[#f8f8f8]'>
      
        <div className='flex items-center justify-start gap-4'>
            <img src="src/assets/home.svg" alt="home" />
            <Link to={'/'}><span className='cursor-pointer'>Home</span></Link>
        </div>

        <div className='flex items-center justify-start gap-4'>
            <img src="src/assets/profile.svg" alt="profile" />
            <Link to={'/Profile'}><span className='cursor-pointer'>Profile</span></Link>
        </div>

        <div className='flex items-center justify-start gap-4'>
            <img src="src/assets/about.svg" alt="about" />
            <Link to={'/About'}><span className='cursor-pointer'>About</span></Link>
        </div>

        <div className='flex items-center justify-start gap-4'>
            <img src="src/assets/contact.svg" alt="contact" />
                <Link to={'/Contact'}><span className='cursor-pointer'>Contacts</span></Link>
        </div>



    </div>
  )
}

export default Sidebar
