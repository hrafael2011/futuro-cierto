import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'

/// PAGES /////
import QuienesSomos from './components/page/QuienesSomos.jsx'
import MisionYValores from './components/page/MisionYValores.jsx'
import Contacto from './components/page/Contacto.jsx'
import Donar from './components/page/Donar.jsx'
import Educacion from './components/page/Educacion.jsx'
import Noticias from './components/page/Noticias.jsx'
import NoticiasDetalles from './components/page/NoticiasDetalles.jsx'
import EducacionDetalles from './components/page/EducacionDetalles.jsx'

const router = createBrowserRouter ([

  {
    path:"/",
    element:<App/>
  },
  {
    path:"/quienes-somos",
    element: <QuienesSomos/>
  },
  {
    path:"/mision-valores",
    element: <MisionYValores/>

  },
  {
    path:"/contactos",
    element: <Contacto/>

  },{
    path:"/donar",
    element: <Donar/>

  },
  {
    path: "/educacion",
    element: <Educacion/>
  },
  {
    path: "/educacion/:id",
    element: <EducacionDetalles/>
  },
  {
    path: "/noticias",
    element: <Noticias/>
  },
  {
    path: "/noticias/:id",
    element: <NoticiasDetalles/>
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
