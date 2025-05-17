import React from 'react'
import education from "../assets/images/education.png"
import certificateImage from "../assets/images/certification.jpg"
import programer from "../assets/images/programer.gif"
import goal from "../assets/images/images-goal.png"
import { FaLinkedin } from "react-icons/fa"
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const About = () => {
  return (
    <div className='flex flex-col items-center p-12 text-center m-8 rounded-xl font-bold text-5xl bg-pink-100'>
      <h1 className='font-yatra font-normal text-violet-900 mt-4'>About Me</h1>
      <div className='flex flex-col justify-center mt-4'>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
          <div className=' text-left mb-4 md:mb-0'>
            <img src={education} alt='' className='rounded-lg shadow-xl w-64 md:w-80 md:mr-40' />
          </div>
          <div className='flex flex-col text-left w-64 md:w-80'>
            <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Education</h1>
            <p className='text-sm font-normal text-gray-500'>Completed my Master of Business Administration in Avanti Institute of Engineering and Technology in Human Resources Specialization (2018-21).</p>
          </div>
        </div>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
          <div className=' text-left mb-4 md:mb-0 md:order-2'>
            <img src={certificateImage} alt='' className='rounded-lg shadow-xl md:ml-40 w-64 md:w-80' />
          </div>
          <div className='flex flex-col text-left md:order-1 w-64 md:w-80'>
            <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Certifications</h1>
            <p className='text-sm font-normal text-gray-500'>Certified as a fullstack web developer by NxtWave. Successfully completed the FullStack Development with MERN Specialization (2021-22).</p>
          </div>
        </div>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
          <div className=' text-left mb-4 md:mb-0'>
            <img src={programer} alt='' className='rounded-lg shadow-xl md:mr-40 w-64 md:w-80' />
          </div>
          <div className='flex flex-col text-left w-64 md:w-80'>
            <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Experience</h1>
            <p className='text-sm font-normal text-gray-500'>I have 9 months of experience in full stack development at PROCORP, where I worked on designing, developing, and maintaining web applications using modern front-end and back-end technologies.</p>
          </div>
        </div>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
          <div className=' text-left mb-4 md:mb-0 md:order-2'>
            <img src="https://www.namasteui.com/wp-content/uploads/2019/07/Full-Stack-Developer.jpg" alt='' className='rounded-lg shadow-xl w-64 md:w-80 md:ml-40 ' />
          </div>
          <div className='flex flex-col text-left w-64 md:w-80 md:order-1'>
            <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Skills</h1>
            <p className='text-sm font-normal text-gray-500'>Certified as a fullstack web developer by NxtWave, including the skills are HTML, CSS, TailwindCss, JavaScript, React.Js, MongoDb, SqLite, Node.Js and Express.</p>
          </div>
        </div>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
          <div className=' text-left mb-4 md:mb-0'>
            <img src={goal} alt='' className='rounded-lg shadow-xl w-64 md:w-80 md:mr-40' />
          </div>
          <div className='flex flex-col text-left w-64 md:w-80'>
            <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Goal</h1>
            <p className='text-sm font-normal text-gray-500'> My goal is to continue growing as a full stack developer by enhancing my skills in advanced web technologies, contributing to impactful projects, and eventually leading development teams to deliver innovative software solutions.</p>
          </div>
        </div>
        <div className='flex flex-col mb-12 md:flex-row items-center md:justify-between border-b border-dashed border-pink-300 p-8'>
          <div className=' text-left mb-4 md:mb-0 md:order-2'>
            <img src="https://i.pinimg.com/originals/c2/1f/7f/c21f7f1149bef6c2efa3c6fecff200ca.gif" alt='' className='rounded-lg shadow-xl w-64 md:w-80 md:ml-40 ' />
          </div>
          <div className='flex flex-col text-left w-64 md:w-80 md:order-1'>
            <h1 className='text-pink-600 text-3xl mt-0 mb-4 font-normal'>Passion</h1>
            <p className='text-sm font-normal text-gray-500'>Passionate about Creating Interactive Applications and Developed Web Applications. Interested to take new challenges and learn new technologies.</p>
          </div>
        </div>
      </div>
      <div className='mt-4 ml-4 flex flex-row gap-8  text-violet-900'>
        <a href='https://www.facebook.com/mounikagoud.lingala?mibextid=ZbWKwL' rel="noreferrer" target='_blank' network='facebook' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><BsFacebook size="30" /></a>
        <a href='https://instagram.com/sireeshgoud_lingala?igshid=ZGUzMzM3NWJiOQ==' rel="noreferrer" target='_blank' network='instagram' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><AiFillInstagram size="34" /></a>
        <a href='https://www.linkedin.com/in/mounika-lingala-672008194/' rel="noreferrer" target='_blank' network='linkedin' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><FaLinkedin size="30" /></a>
        <a href='https://github.com/mounikalingala' target='_blank' rel="noreferrer" network='github' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><BsGithub size="30" /></a>
      </div>

    </div>
  )
}

export default About