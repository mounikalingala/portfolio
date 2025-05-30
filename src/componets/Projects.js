import React from 'react'
import { AiFillEye } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import project1 from "../assets/images/swiggy-clone.png"
import project2 from "../assets/images/app-store.png"
import project3 from "../assets/images/openauto.png"
import project4 from "../assets/images/food-munch.png"
import project5 from "../assets/images/food-delivery.png"
import project6 from "../assets/images/dental-care.png"

let projects = [
  {
    name: "Dental Care",
    image: project6,
    description: "Dental Care is a modern, user-friendly hospital website designed to provide patients with easy access to dental services, appointment booking, and essential oral health information. The website features a clean, responsive design, service listings, doctor profiles, and an online contact form.",
    link: "https://mounika-dentalcare.netlify.app/",
    github: "https://github.com/mounikalingala/dental-care",
  }
  ,
  {
    name: "Tasty Kitchens",
    image: project1,
    description: "Tasty Kitchen is an online food delivery website that connects users with a wide variety of restaurants in their area. The platform allows customers to browse menus, place orders, and get their favorite meals delivered straight to their doorstep. With a clean, responsive design and easy-to-use interface.",
    link: "https://mouniskitchen.ccbp.tech",
    github: "https://github.com/mounikalingala/swiggyClone_tastyKitchens",
  },
  {
    name: "App Store",
    image: project2,
    description: "App Store is a versatile web platform that brings together a wide range of apps in one place, including games, news, social media, and food delivery applications. The website allows users to explore, browse, and access various categories of apps through an organized, clean, and user-friendly interface.",
    link: "https://storapps.ccbp.tech/",
    github: "https://github.com/mounikalingala",
  },
  {
    name: "Food Delivery",
    image: project5,
    description: "This Food Delivery App is designed to offer a wide variety of delicious dishes, including breakfast, soups, pasta, main courses, pizzas, and burgers. The app provides an easy-to-use, visually appealing interface where users can browse categories, view menus, and place orders for their favorite meals.",
    link: "https://mounika-food-delivery.netlify.app/",
    github: "https://github.com/mounikalingala/food-delivery-website",
  },
  {
    name: "Openauto",
    image: project3,
    description: "OpenAuto is an online ride booking platform that allows users to easily book rides anytime, anywhere. The platform offers a simple, user-friendly interface where customers can select pickup and drop-off locations, choose ride options, and track their booking status in real time.",
    link: "https://sage-genie-ffb86f.netlify.app",
    github: "https://github.com/mounikalingala/openauto",
  },
  {
    name: "Food Munch",
    image: project4,
    description: "Food Munch is an online food ordering and delivery platform that connects users with a wide range of restaurants. The platform allows customers to browse menus, place orders, and enjoy quick doorstep delivery of their favorite dishes. Designed with a user-friendly interface and responsive layout.",
    link: "https://mounikafoods.ccbp.tech/",
    github: "https://github.com/mounikalingala/",
  },
]

projects.map((project) => console.log(project.image))


const Projects = () => {
  return (
    <div className='m-8 p-8 bg-violet-50 bg-full rounded-xl border'>
      <h1 className='text-center font-yatra text-pink-600 text-5xl font-bold mt-8 mb-12'>My Projects</h1>
      <div className='md:grid-cols-3 flex flex-wrap gap-16 flex-col justify-center items-center md:flex-row mt-8'>
        {projects && projects.map((project) => (
          <div className='bg-zinc-50 mb-12 rounded-lg w-64 md:w-80 h-[450px] border-l-4 border-pink-500 transition hover:border-r-4 hover:border-pink-500 hover:border-0 hover:-translate-y-1 duration-300 hover:scale-200 shadow-xl shadow-black relative group '>
            <img src={project.image} alt="" className='rounded-t-lg' />
            <div className='flex flex-col items-center p-4'>
              <h1 className=' font-bold text-pink-600 text-lg'>{project.name}</h1>
              <p className=" text-gray-500 text-sm m-2 h-40 overflow-hidden ">
                {project.description}
              </p>
              <button className='mt-4 bg-pink-600 rounded-lg text-sm transition hover:bg-opacity-75 focus:outline-none hover:focus:ring hover:ring-pink-300 hover:-translate-2 scale-100 duration-300 text-white hover:font-semibold h-10 w-28'>Explore More</button>
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
      </div>

    </div>
  )
}

export default Projects