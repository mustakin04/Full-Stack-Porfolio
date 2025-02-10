import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Aboutme from './Pages/Aboutme/Aboutme.jsx';
import Projectall from './Pages/Projectall/Projectall.jsx';
import Educations from './Pages/Educations/Educations.jsx';
import Contactme from './Pages/Contactme/Contactme.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "about",
    element: <Aboutme></Aboutme>,
  },
  {
    path: "project",
    element: <Projectall></Projectall>,
  },
  {
    path: "education",
    element: <Educations></Educations>,
  },
  {
    path: "contact",
    element: <Contactme></Contactme>,
  },
  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
