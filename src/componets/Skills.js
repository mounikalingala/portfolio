import React from 'react'
import {ImHtmlFive} from 'react-icons/im'
import { SiCss3, SiExpress, SiMongodb, SiSqlite, SiPython } from "react-icons/si"
import { TbBrandJavascript } from "react-icons/tb"
import { GrReactjs } from "react-icons/gr"
import { FaNodeJs } from "react-icons/fa"

const Skils=()=> {
  return (
    <div className='bg-violet-50 rounded-xl m-8 p-12 text-5xl'>
      <h1 className="text-center font-yatra text-pink-600 mt-4">Skills</h1> 
      <div className='flex md:flex-wrap justify-center items-center flex-col md:flex-row gap-12 mt-12 mb-12'>
        <div className='flax flex-col bg-zinc-50 relative w-64 md:w-80 shadow-inner shadow rounded-lg p-8 shadow-black contrast-125 '>
          <div className='flex flex-row text-pink-600 text-xl mb-4'>
            <ImHtmlFive size="30" />
            <h1 className='ml-2 font-bold'>HTML5</h1>
          </div>
          <p className='text-sm text-gray-500'>Learned and certifiend in HTML5 and I heve two years of experience, expert according to proficiency and build some simple projects. </p>
        </div>
        <div className='flax flex-col bg-zinc-50 relative w-64 md:w-80 shadow-inner shadow rounded-lg p-8 shadow-black contrast-125 '>
          <div className='flex flex-row text-pink-600 text-xl mb-4'>
            <SiCss3 size="30" />
            <h1 className='ml-2 font-bold'>CSS3</h1>
          </div>
          <p className='text-sm text-gray-500'>Learned and certifiend in CSS3 and I heve two years of experience, expert according to proficiency and styled and build some responsive projects. </p>
        </div>
        <div className='flax flex-col bg-zinc-50 relative w-64 md:w-80 shadow-inner shadow rounded-lg p-8 shadow-black contrast-125 '>
          <div className='flex flex-row text-pink-600 text-xl mb-4'>
            <TbBrandJavascript size="40" />
            <h1 className='ml-2 font-bold'>Javascript</h1>
          </div>
          <p className='text-sm text-gray-500'>Learned and certifiend in Javascript and I heve two years of experience, expert according to proficiency and build some dynamic projects. </p>
        </div>
        <div className='flax flex-col bg-zinc-50 relative w-64 md:w-80 shadow-inner shadow rounded-lg p-8 shadow-black contrast-125 '>
          <div className='flex flex-row text-pink-600 text-xl mb-4'>
            <GrReactjs size="30" />
            <h1 className='ml-2 font-bold'>ReactJs</h1>
          </div>
          <p className='text-sm text-gray-500'>Learned and certifiend in ReactJs and I heve one year of experience, expert according to proficiency and build some single page and dynamic projects. </p>
        </div>
        <div className='flax flex-col bg-zinc-50 relative w-64 md:w-80 shadow-inner shadow rounded-lg p-8 shadow-black contrast-125 '>
          <div className='flex flex-row text-pink-600 text-xl mb-4'>
            <FaNodeJs size="30" />
            <h1 className='ml-2 font-bold'>NodeJs</h1>
          </div>
          <p className='text-sm text-gray-500'>Learned and certifiend in NodeJs and I heve one year of experience, expert according to proficiency and build some server side projects. </p>
        </div>
        <div className='flax flex-col bg-zinc-50 relative w-64 md:w-80 shadow-inner shadow rounded-lg p-8 shadow-black contrast-125 '>
          <div className='flex flex-row text-pink-600 text-xl mb-4'>
            <SiExpress size="30" />
            <h1 className='ml-2 font-bold'>ExpressJs</h1>
          </div>
          <p className='text-sm text-gray-500'>Learned and certifiend in ExpressJs and I heve one year of experience, Intermediate according to proficiency and build projects with expressJs. </p>
        </div>
        <div className='flax flex-col bg-zinc-50 relative w-64 md:w-80 shadow-inner shadow rounded-lg p-8 shadow-black contrast-125 '>
          <div className='flex flex-row text-pink-600 text-xl mb-4'>
            <SiMongodb size="30" />
            <h1 className='ml-2 font-bold'>MongoDB</h1>
          </div>
          <p className='text-sm text-gray-500'>Learned and certifiend in MongoDB and I heve one year of experience, intermediate according to proficiency and created database for projects. </p>
        </div>
        <div className='flax flex-col bg-zinc-50 relative w-64 md:w-80 shadow-inner shadow rounded-lg p-8 shadow-black contrast-125 '>
          <div className='flex flex-row text-pink-600 text-xl mb-4'>
            <SiSqlite size="30" />
            <h1 className='ml-2 font-bold'>SQLite</h1>
          </div>
          <p className='text-sm text-gray-500'>Learned and certifiend in SQLite and I heve one year of experience, intermediate according to proficiency and created database for projects. </p>
        </div>
        <div className='flax flex-col bg-zinc-50 relative w-64 md:w-80 shadow-inner shadow rounded-lg p-8 shadow-black contrast-125 '>
          <div className='flex flex-row text-pink-600 text-xl mb-4'>
            <SiPython size="30" />
            <h1 className='ml-2 font-bold'>Python</h1>
          </div>
          <p className='text-sm text-gray-500'>Learned and certifiend in Python and I heve one year of experience, intermediate according to proficiency. </p>
        </div>
      </div>
      </div>
  )
}

export default Skils