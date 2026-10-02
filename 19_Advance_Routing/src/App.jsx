import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Child from './pages/Child'
import Women from './pages/Women'
import Men from './pages/Men'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>

        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        
        <Route path='child' element={<Child/>}/>

        </Route>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CourseDetail/>}/>

        <Route path='*' element={<Notfound/>}/>
      </Routes>

      <Footer/>
      
    </div>
  )
}

export default App
