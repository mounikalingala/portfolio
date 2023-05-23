import React from 'react'
import Navbar from './Navbar'
import Projects from './Projects'
import Blogs from './Blogs'
import About from './About'
import Contact from './Contact'
import Profile from './Profile'

const Home=() =>{
  return (
    <div className="p-12 bg-white bg-no-repeat w-full h-full bg-cover">
      
      <Navbar />
      <Profile />
      <Projects />
      <Blogs />
      <About />
      <Contact />
      
    </div>
  )
}

export default Home