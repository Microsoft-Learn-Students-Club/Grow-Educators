import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Chat from './components/Chat/Chat.jsx'
import Courses from './components/Courses/Courses.jsx'
import Hero from './components/Hero/Hero.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import AboutUs from './AboutUs/AboutUs.jsx'
import Error from './components/Error/Error.jsx'
import ViewCourse from './components/Courses/ViewCourse.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Hero />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/viewcourse' element={<ViewCourse />} />
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
