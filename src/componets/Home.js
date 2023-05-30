import React from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Profile from './Profile'
import Skills from "./Skills"

const Home=() =>{
  return (
    <div className=" bg-white">
      <Profile />
      <Projects />
      <About />
      <Skills/>
      <Contact />
      
    </div>
  )
}

export default Home