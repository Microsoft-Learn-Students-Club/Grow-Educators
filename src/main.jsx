import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Chat from './components/Chat/Chat.jsx'
import Hero from './components/Hero/Hero.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Error from './components/Error/Error.jsx'
import Cards from "./components/Cards/Card.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Hero />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/courses' element={<Cards/>}/>
      <Route path='*' element={<Error />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Chat />
  </React.StrictMode>,
)
