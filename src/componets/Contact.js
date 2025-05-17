import React from 'react'
import { BsFillPersonFill } from "react-icons/bs"
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md"
import { BsSendFill } from "react-icons/bs"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ecm4al2', 'template_kkeupkc', e.target, '2YH6TVaHF3KDdV12m')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <div className='flex justify-center flex-col text-center m-8 bg-pink-100 font-bold text-5xl rounded-xl p-12'>
      <h1 className="text-center font-yatra text-violet-900 mt-4">Contact Me</h1>
      <div className='flex flex-col items-center md:flex-row md:justify-between mt-8'>
        <div className='flex flex-col order-2 md:order-1 mt-12 pl-4'>
          <div className='flex flex-row mb-8'>
            <BsFillPersonFill size="30 " className='text-pink-700' />
            <h1 className='text-lg ml-4 text-gray-600 mt-1 font-semibold'>Mounika Lingala</h1>
          </div>
          <div className='flex flex-row  mb-8'>
            <MdCall size="30 " className='text-pink-700' />
            <h1 className='text-lg ml-4 text-gray-600 mt-1 font-semibold'>+91 9542623716</h1>
          </div>
          <div className='flex flex-row mb-8'>
            <MdEmail size="30 " className='text-pink-700' />
            <h1 className='text-sm md:text-lg ml-4 text-gray-600 mt-1 font-semibold'>mounikagoudlingala@gmail.com</h1>
          </div>
          <div className='flex flex-row mb-8'>
            <MdLocationOn size="30 " className='text-pink-700' />
            <h1 className='text-lg ml-4 text-gray-600 mt-1 font-semibold'>Hyderabad, Telangana</h1>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center order-1 md:order-2 '>
          <form onSubmit={sendEmail} >
            <input className="text-sm text-Black mb-2 w-full max-w-sm font-normal bg-transparent outline-none border h-10 p-4 border-pink-600 rounded-md" type="text" name='name' placeholder='Name' /><br />
            <input className="text-sm text-Black mb-2 w-full max-w-sm font-normal bg-transparent outline-none border h-10 p-4 border-pink-600 rounded-md" type="email" name="email" placeholder='Email' /> <br />
            <input className="text-sm text-Black mb-8 w-full max-w-sm font-normal bg-transparent outline-none border h-10 p-4 border-pink-600 rounded-md" type="text" name="subject" placeholder='Subject' /><br />
            <textarea className="text-sm text-Black mb-4 w-full max-w-sm font-normal bg-transparent outline-none border p-4 border-pink-600 rounded-md h-40" name="message" placeholder='Your Message' cols="42" rows="4"></textarea> <br />
            <div className='flex flex-row justify-center items-center gap-2 w-[90px] h-10 bg-pink-600 ml-32 rounded-lg hover:ring ring-pink-600 cursor-pointer mt-2'>
              <input type="submit" className='text-lg font-semibold text-white text-center cursor-pointer' value="Send" />
              <BsSendFill className='text-xl text-white ' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact