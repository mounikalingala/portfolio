import React from 'react'
import Projects from './Projects'
import Blogs from './Blogs'
import About from './About'
import Contact from './Contact'
import Profile from './Profile'

const Home=() =>{
  return (
    <div className=" bg-white bg-no-repeat w-full h-full bg-cover">
      <Profile />
      <Projects />
      <About />
      <Contact />
      
    </div>
  )
}

export default Home