import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=() =>{
  return (
    <div className='flex h-20 bg-pink-600  rounded-xl flex-row justify-between'>
     
      <div className='p-[25px] flex flex-row ml-4 ' >
        <h1 className='font-extrabold text-4xl font-sacramento text-violet-900 bg-transparant rounded-full h-10 w-10 pr-2 pl-1 pb-[5px] border-2 border-violet-900 mr-2'>m</h1>
        <h1 className='font-yatra text-violet-900 mt-[5px] ml-2 text-3xl'>Mounika</h1>
      </div>
      
      <div className='mt-8 mr-8 flex flex-row'>
        <h3 className='mr-8 hover:text-violet-900 text-gray-700 text-xl font-bold'><Link to="/">Home</Link></h3>
        <h3 className='mr-8 hover:text-violet-900 text-gray-700 text-xl font-bold'><Link to="/projects">Projects</Link></h3>
        <h3 className='mr-8 hover:text-violet-900 text-gray-700 text-xl font-bold'><Link to="/blogs">Blogs</Link></h3>
        <h3 className='mr-8 hover:text-violet-900 text-gray-700 text-xl font-bold'><Link to="/about">About</Link></h3>
        <h3 className='mr-8 hover:text-violet-900 text-gray-700 text-xl font-bold'><Link to="/contact">Conatact</Link></h3>
      </div>
    </div>
  )
}

export default Navbar