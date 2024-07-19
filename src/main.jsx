import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Testimonials from './Pages/Testimonials.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "about",
    element:<About/>,
  },
  {
    path: "contact",
    element:<Contact/>,
  },
  {
    path: "testimonials",
    element:<Testimonials/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />  
 </React.StrictMode>,
)
