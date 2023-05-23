import React from 'react'
import Typical from 'react-typical'
import { FaDownload,FaLinkedin } from "react-icons/fa"
import { BsFacebook,BsGithub } from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import image from '../assets/images/mounika-img.png'

const Profile=()=> {
  return (
      <div className='bg-gradient-to-r from-pink-200 to-violet-200 mt-8 rounded-xl'>
          <div className='flex flex-row justify-center p-20'>
              <div className='mr-12 flex flex-col'>
                  <h1 className='text-4xl font-bold '>Hello!</h1>
                  <h1 className='text-2xl mt-4 mb-4 font-semibold'>I'm <span className='font-nova ml-2 text-4xl font-bold text-pink-600'>Mounika Lingala</span></h1>
                  <h3 className='text-gray-700 text-xl font-bold'>Fullstack Developer</h3>
                  <p className='font-semibold'> 
                  <Typical
                      loop={Infinity}
                      wrapper='p'
                      steps={[
                          "React.js", 4000,
                          "Node.js", 4000,
                          "MongoDB",4000,
                          "HTML5", 4000,
                          "CSS3", 4000,
                          "SqLite",4000,
                          "TailwindCss",4000,
                          "Bootsrap", 4000,
                          "Python", 4000,
                          
                      ]}
                      />
                  </p>
                  <button type='button' className='mt-8 bg-pink-500 text-violet-900 text-xl font-semibold w-100 h-10 rounded-full ml-20 hover:border hover:bg-transparent hover:text-pink-600 hover:border-pink-500'
                  ><a href='' className='flex flex-row justify-center' >Resume <FaDownload className=' ml-4 mt-2'/></a>
                  </button>
                  <div className='flex flex-row'>
                      <h1 className='mt-8 text-gray-700 font-semibold'>Follow Me _______</h1>
                      <div className='mt-8 ml-4 flex flex-row justify-between'>
                          <a href=''><BsFacebook size="20" /></a>
                          <a href=''><AiFillInstagram size="24" /></a>
                          <a href=''><FaLinkedin size="20" /></a>
                          <a href='https://github.com/mounikalingala'><BsGithub size="20" /></a>
                          
                      </div>
                      
                  </div>
              </div>
              <div className='bg-pink-200 ml-12 flex flex-col justify-end rounded-full shadow-2xl h-80 w-80 pb-0'>
                  <img className='h-200 w-150 rounded-b-full ml-auto shadow-2xl' src={image} alt='' />
              </div>
          </div>
      </div>
  )
}

export default Profile