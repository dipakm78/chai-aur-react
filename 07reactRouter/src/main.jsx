import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./component/Home/Home"
import About from "./component/About/About"
import Contact from "./component/Contact/Contact"
import User from './component/User/User.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'

// const router= createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//       path:"",
//       element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       }
//   ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="user/:userId" element={<User />}/>
      <Route
      loader={githubInfoLoader} 
      path="Github" 
      element={<Github />}
      />
   </Route> 
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
