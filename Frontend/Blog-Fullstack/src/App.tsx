import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/pages/home'
import CreatePost from './component/pages/CreatePost'
import PostLists from './component/pages/PostLists'
// import Test from './component/pages/test'
import PostEdit from './component/pages/PostEdit'
import PostDelete from './component/pages/PostDelete'
import Profile from './component/pages/Profile'
import About from './component/pages/About'
import Contact from './component/pages/Contact'



const router = createBrowserRouter([
  { 
    path: '/',
    element : <Home/>
  },
  {
    path : '/createPost',
    element : <CreatePost/>
  },
  {
    path : '/PostLists',
    element : <PostLists/>
  },
  {
    path : '/PostEdit/:id',
    element : <PostEdit/>
  },
  {
    path : '/PostDelete/:id',
    element : <PostDelete/>
  },
  {
    path : '/Profile',
    element : <Profile/>
  },
  {
    path : '/About',
    element : <About/>
  },
  {
    path : '/Contact',
    element : <Contact/>
  }
  
])



function App() {


  return (

      <RouterProvider router={router}/>
      
  )
}

export default App




