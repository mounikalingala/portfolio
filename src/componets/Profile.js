import React from 'react'
import { FaDownload, FaLinkedin } from "react-icons/fa"
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import image from '../assets/images/mounika-img.png'

const Profile = () => {
    return (
        <div className='bg-gradient-to-r from-pink-200 to-violet-200 rounded-xl m-8'>
            <div className='flex flex-col md:flex md:flex-row justify-center items-center p-20'>
                <div className='mr-12 order-2 md:order-1 flex flex-col pt-0 pl-4 md:pl-4'>
                    <h1 className='text-4xl font-bold '>Hello!</h1>
                    <h1 className='text-2xl mt-4 mb-4 font-bold'>I'm <span className='font-nova ml-2 text-4xl font-bold text-pink-600'>Mounika Lingala</span></h1>
                    <h3 className='text-gray-700 text-2xl font-semibold'>Fullstack Developer</h3>

                    <button type='button' className='mt-8 bg-pink-500 text-violet-900 text-xl font-semibold w-40 h-12 rounded-full ml-20 hover:border hover:bg-transparent hover:text-pink-600 hover:border-pink-500 focus:'>
                        <a href='https://drive.google.com/file/d/1O-Nh_lEBmRa_Wf5uWQeOqjfzTj-5L4nX/view?usp=drive_link' rel="noreferrer" target='_blank' className='flex flex-row justify-center transition' >Resume <FaDownload className='animate-bounce ml-4 mt-2' /></a>
                    </button>
                    <div className='flex flex-row justify-between mt-4'>
                        <h1 className='mt-4 text-gray-700 hidden md:block font-semibold'>Follow Me _______</h1>
                        <div className='mt-4 ml-4 flex flex-row gap-4'>
                            <a href='https://www.facebook.com/mounikagoud.lingala?mibextid=ZbWKwL' rel="noreferrer" target='_blank' network='facebook' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><BsFacebook size="30" /></a>
                            <a href='https://instagram.com/sireeshgoud_lingala?igshid=ZGUzMzM3NWJiOQ==' rel="noreferrer" target='_blank' network='instagram' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><AiFillInstagram size="34" /></a>
                            <a href='https://www.linkedin.com/in/mounika-lingala-672008194/' rel="noreferrer" target='_blank' network='linkedin' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><FaLinkedin size="30" /></a>
                            <a href='https://github.com/mounikalingala' rel="noreferrer" target='_blank' network='github' className='transition ease-in-out hover:scale-110 hover:-translate-y-1 duration-150'><BsGithub size="30" /></a>
                        </div>

                    </div>
                </div>
                <div className=' order-1 md:order-2 bg-pink-200 mb-8 md:ml-12 flex flex-col justify-end rounded-full shadow-3xl md:h-80 md:w-80 h-60 w-60 pb-0'>
                    <img className='md:h-200 md:w-150 h-100 w-50  rounded-b-full ml-auto shadow-2xl' src={image} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Profile