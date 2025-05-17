import React from 'react'
import { AiFillEye } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import project1 from "../assets/images/swiggy-clone.png"
import project2 from "../assets/images/app-store.png"
import project3 from "../assets/images/openauto.png"
import project4 from "../assets/images/food-munch.png"
import project5 from "../assets/images/food-delivery.png"

let projects = [
  {
    name: "Tasty Kitchens",
    image: project1,
    description: "Tasty Kitchens is online food ordering and delivery platform, delivers the food including Restaurants",
    link: "https://mouniskitchen.ccbp.tech",
    github: "https://github.com/mounikalingala/swiggyClone_tastyKitchens",
  },
  {
    name: "App Store",
    image: project2,
    description: "App store is a website which is a store for the several applications including social,games,news, and food.",
    link: "https://storapps.ccbp.tech/",
    github: "https://github.com/mounikalingala",
  },
  {
    name: "Food Delivery",
    image: project5,
    description: "A food delivery platform, it can provide food from the direct restaurant you can order by online having number of verities",
    link: "https://mounika-food-delivery.netlify.app/",
    github: "https://github.com/mounikalingala/food-delivery-website",
  },
  {
    name: "Openaouto",
    image: project3,
    description: "Openauto is a ride hailing website, we enjoy the trip with a simple booking of a ride.",
    link: "https://sage-genie-ffb86f.netlify.app",
    github: "https://github.com/mounikalingala/openauto",
  },
  {
    name: "Food Munch",
    image: project4,
    description: "Food Munch is online food ordering and delivery platform, delivers the food including Restaurants",
    link: "https://mounikafoods.ccbp.tech/",
    github: "https://github.com/mounikalingala/",
  }
]

projects.map((project) => console.log(project.image))


const Projects = () => {
  return (
    <div className='m-8 p-8 bg-violet-50 bg-full rounded-xl border'>
      <h1 className='text-center font-yatra text-pink-600 text-5xl font-bold mt-8 mb-12'>My Projects</h1>
      <div className='md:grid-cols-3 flex flex-wrap gap-16 flex-col justify-center items-center md:flex-row mt-8'>
        {projects && projects.map((project) => (
          <div className='bg-zinc-50 mb-12 rounded-lg w-64 md:w-80 h-[360px] border-l-4 border-pink-500 transition hover:border-r-4 hover:border-pink-500 hover:border-0 hover:-translate-y-1 duration-300 hover:scale-200 shadow-xl shadow-black relative group '>
            <img src={project.image} alt="image" className='rounded-t-lg' />
            <div className='flex flex-col items-center p-4'>
              <h1 className=' font-bold text-pink-600 text-lg'>{project.name}</h1>
              <p className=" text-gray-500 text-sm m-2 ">
                {project.description}
              </p>
              <button className='mt-4 bg-pink-600 rounded-lg text-sm transition hover:bg-opacity-75 focus:outline-none hover:focus:ring hover:ring-pink-300 hover:-tranlate-x-2 scale-100 duration-300 text-white hover:font-semibold h-10 w-28'>Explore More</button>
            </div>
            <div className=' absolute top-0 right-0 left-0 h-32 md:h-40 w-64 md:w-80 rounded-lg opacity-0 bg-opacity-50 group-hover:opacity-100 bg-black'>
              <div className='flex flex-row gap-8 items-center mt-[65px] justify-center text-black'>
                <div className='bg-black opacity-75 p-2 rounded-full text-white'>
                  <a href={project.link} rel="noreferrer" target='_blank' ><AiFillEye size="30" /></a>
                </div>
                <div className='bg-black opacity-75 p-2 rounded-full text-white'>
                  <a href={project.github} rel="noreferrer" target='_blank' network='github' className='opacity-100'><BsGithub size="30" /></a>
                </div>
              </div>
            </div>
          </div>))}
        {/* <div className='bg-zinc-50 mb-12 rounded-lg w-64 md:w-80 h-[360px] border-l-4 border-pink-500 transition hover:border-r-4 hover:border-pink-500 hover:border-0 hover:-translate-y-1 duration-300 hover:scale-200 shadow-xl shadow-black relative group '>
          <img src={project2} alt="" className='rounded-t-lg' />
          <div className='flex flex-col items-center p-4'>
            <h1 className=' font-bold text-pink-600 text-lg'>Appstore</h1>
            <p className=" text-gray-500 text-sm m-2 ">
              Appstore is a website which is a store for the several applications including social,games,news, and food.
            </p>
            <button className='mt-4 bg-pink-600 rounded-lg text-sm transition hover:bg-opacity-75 focus:outline-none hover:focus:ring hover:ring-pink-300 hover:-tranlate-x-2 scale-100 duration-300 text-white hover:font-semibold h-10 w-28'>Explore More</button>
          </div>
          <div className=' absolute top-0 right-0 left-0 h-32 md:h-40 w-64 md:w-80 rounded-lg opacity-0 bg-opacity-50 group-hover:opacity-100 bg-black'>
            <div className='flex flex-row gap-8 items-center mt-[65px] justify-center text-black'>
              <div className='bg-black opacity-75 p-2 rounded-full text-white'>
                <a href='https://storapps.ccbp.tech/' rel="noreferrer" target='_blank'><AiFillEye size="30" /></a>
              </div>
              <div className='bg-black opacity-75 p-2 rounded-full text-white'>
                <a href='https://github.com/mounikalingala' rel="noreferrer" target='_blank' network='github' className='opacity-100'><BsGithub size="30" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-zinc-50 mb-12 rounded-lg w-64 md:w-80 h-[360px] border-l-4 border-pink-500 transition hover:border-r-4 hover:border-pink-500 hover:border-0 hover:-translate-y-1 duration-300 hover:scale-200 shadow-xl shadow-black relative group '>
          <img src={project3} alt="" className='rounded-t-lg' />
          <div className='flex flex-col items-center p-4'>
            <h1 className=' font-bold text-pink-600 text-lg'>Openauto</h1>
            <p className=" text-gray-500 text-sm m-2 ">
              Openauto is a ride hailing website, we enjoy the trip with a simple booking of a ride.
            </p>
            <button className='mt-4 bg-pink-600 rounded-lg text-sm transition hover:bg-opacity-75 focus:outline-none hover:focus:ring hover:ring-pink-300 hover:-tranlate-x-2 scale-100 duration-300 text-white hover:font-semibold h-10 w-28'>Explore More</button>
          </div>
          <div className=' absolute top-0 right-0 left-0 h-32 md:h-40 w-64 md:w-80  rounded-lg opacity-0 bg-opacity-50 group-hover:opacity-100 bg-black'>
            <div className='flex flex-row gap-8 items-center mt-[65px] justify-center text-black'>
              <div className='bg-black opacity-75 p-2 rounded-full text-white'>
                <a href='https://sage-genie-ffb86f.netlify.app' rel="noreferrer"><AiFillEye size="30" /></a>
              </div>
              <div className='bg-black opacity-75 p-2 rounded-full text-white'>
                <a href='https://github.com/mounikalingala/openauto' rel="noreferrer" target='_blank' network='github' className='opacity-100'><BsGithub size="30" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-zinc-50 mb-12 rounded-lg w-64 md:w-80 h-[360px] border-l-4 border-pink-500 transition hover:border-r-4 hover:border-pink-500 hover:border-0 hover:-translate-y-1 duration-300 hover:scale-200 shadow-xl shadow-black relative group '>
          <img src={project4} alt="" className='rounded-t-lg' />
          <div className='flex flex-col items-center p-4'>
            <h1 className='text-gray-700 font-bold text-pink-600 text-lg'>Food Munch</h1>
            <p className=" text-gray-500 text-sm m-2 ">
              Food munch is a ecomers food website, easy to order food from our favorite rastaurants.
            </p>
            <button className='mt-4 bg-pink-600 rounded-lg text-sm transition hover:bg-opacity-75 focus:outline-none hover:focus:ring hover:ring-pink-300 hover:-tranlate-x-2 scale-100 duration-300 text-white hover:font-semibold h-10 w-28'>Explore More</button>
          </div>
          <div className=' absolute top-0 right-0 left-0 h-32 md:h-40 w-64 md:w-80  rounded-lg opacity-0 bg-opacity-50 group-hover:opacity-100 bg-black'>
            <div className='flex flex-row gap-8 items-center mt-[65px] justify-center text-black'>
              <div className='bg-black opacity-75 p-2 rounded-full text-white'>
                <a href='https://mounikafoods.ccbp.tech/' rel="noreferrer" target='_blank' network=''><AiFillEye size="30" className='' /></a>
              </div>
              <div className='bg-black opacity-75 p-2 rounded-full text-white'>
                <a href='https://github.com/mounikalingala' rel="noreferrer" target='_blank' network='github' className='opacity-100'><BsGithub size="30" /></a>
              </div>
            </div>
          </div>
        </div> */}
      </div>

    </div>
  )
}

export default Projects