import React from 'react'
import certificateImage from "../assets/images/certification.jpg"
import programer from "../assets/images/programer.gif"
import { FaLinkedin } from "react-icons/fa"
import { BsFacebook,BsGithub } from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const About=() =>{
  return (
   <div className='flex flex-col items-center p-12 text-center m-12 rounded-xl font-bold text-5xl bg-pink-100'>
      <h1 className='font-yatra font-normal text-violet-900 mt-4'>About Me</h1>
      <div className='flex flex-col justify-center mt-4'>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
          <div className=' text-left mb-4 md:mb-0'>
          <img src='https://darvideo.tv/wp-content/uploads/2021/05/E-learning-animation-video.jpg' alt='' className='rounded-lg shadow-xl w-80 md:mr-40'/>
          </div>
          <div className='flex flex-col text-left w-80'>
          <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Educaton</h1>
          <p className='text-sm font-normal text-gray-500'>Completed my Master of Business Administration in Avanthi Institute of Engineering and Technology in HumanResoures Specialization (2018-21).</p>
        </div>
        </div>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
        <div className=' text-left mb-4 md:mb-0 md:order-2'>
          <img src={certificateImage} alt='' className='rounded-lg shadow-xl w-80 md:ml-40 '/>
          </div>
          <div className='flex flex-col text-left w-80 md:order-1'>
          <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Certifications</h1>
          <p className='text-sm font-normal text-gray-500'>Certified as a fullstack web developer by NxtWave. Successfully completed the FullStack Development with MERN Specialization (2021-22).</p>
        </div>
        </div>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
        <div className=' text-left mb-4 md:mb-0'>
          <img src={programer} alt='' className='rounded-lg shadow-xl w-80 md:mr-40'/>
          </div>
          <div className='flex flex-col text-left w-80'>
          <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Experience</h1>
          <p className='text-sm font-normal text-gray-500'>At present working as a fullstack developer with six months of experience in Proponion Company and building some creative projects by own.</p>
        </div>
        </div>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
        <div className=' text-left mb-4 md:mb-0 md:order-2'>
          <img src="https://www.namasteui.com/wp-content/uploads/2019/07/Full-Stack-Developer.jpg" alt='' className='rounded-lg shadow-xl w-80 md:ml-40 '/>
          </div>
          <div className='flex flex-col text-left w-80 md:order-1'>
          <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Skills</h1>
          <p className='text-sm font-normal text-gray-500'>Certified as a fullstack web developer by NxtWave, including the skills are HTML, CSS, JavaSript, React.Js, MongoDb, SqLite, Node.Js.</p>
        </div>
        </div>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
        <div className=' text-left mb-4 md:mb-0'>
          <img src='https://camo.githubusercontent.com/fa73289736064aba480d0708da37d7aa183a8c3e2bcc2f58c54285a3bbbeecc1/68747470733a2f2f7777772e61616c7068612e6e65742f77702d636f6e74656e742f75706c6f6164732f323032302f31322f66756c6c2d737461636b2d646576656c6f706d656e742e676966' alt='' className='rounded-lg shadow-xl w-80 md:mr-40'/>
          </div>
          <div className='flex flex-col text-left w-80'>
          <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Goal</h1>
          <p className='text-sm font-normal text-gray-500'>Goal-oriented Web Developer with fast-learning ability seeking a challenging career to utilize my skills, keep learning and sharing.</p>
        </div>
        </div>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
        <div className=' text-left mb-4 md:mb-0 md:order-2'>
          <img src="https://i.pinimg.com/originals/c2/1f/7f/c21f7f1149bef6c2efa3c6fecff200ca.gif" alt='' className='rounded-lg shadow-xl w-80 md:ml-40 '/>
          </div>
          <div className='flex flex-col text-left w-80 md:order-1'>
          <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Passion</h1>
          <p className='text-sm font-normal text-gray-500'>Passionate about Creating Interactive Applications and Developed Web Applications. Interested to take new challenges and learn new technologies.</p>
        </div>
        </div>
       </div>
      <div className='mt-4 ml-4 flex flex-row gap-8  text-violet-900'>
         <a href='https://www.facebook.com/mounikagoud.lingala?mibextid=ZbWKwL' rel="noreferrer" target='_blank' network='facebook' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><BsFacebook size="30" /></a>
         <a href='https://instagram.com/sireeshgoud_lingala?igshid=ZGUzMzM3NWJiOQ==' rel="noreferrer" target='_blank' network='instagram' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><AiFillInstagram size="34" /></a>
         <a href='https://www.linkedin.com/in/mounika-lingala-672008194/' rel="noreferrer" target='_blank' network='linkedin' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><FaLinkedin size="30" /></a>
         <a href='https://github.com/mounikalingala' target='_blank' rel="noreferrer" network='github' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><BsGithub size="30"  /></a>                   
        </div>

      </div>
  )
}

export default About