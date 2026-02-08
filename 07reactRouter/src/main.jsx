import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import Github from './Github/Github.jsx'
import { loader } from './Github/Github.jsx'
const router = createBrowserRouter([
  {
    path : '/' ,
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "/about" ,
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },{
        path : "/user/:userId",
        element : <User/>
      },{
        loader : loader,
        path : "user/github",
        element : <Github />
      },

      
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
