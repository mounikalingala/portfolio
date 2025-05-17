import React, { useState } from 'react'
import { Link } from 'react-router-dom';

let menuItems = [
  { name: "HOME", link: "/" },
  { name: "PROJECTS", link: "/projects" },
  { name: "ABOUT", link: "/about" },
  { name: "SKILLS", link: "/skills" },
  { name: "CONTACT", link: "/contact" }
]

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (

    <div className='flex h-20 bg-gradient-to-r from-violet-200 to-pink-200  rounded-xl flex-row justify-between ml-8 mr-8 mt-8 '>

      <div className='p-[25px] flex flex-row ml-4  ' >
        <h1 className='font-extrabold text-4xl font-sacramento text-violet-900  bg-transparent rounded-full h-12 w-12 pr-2 pl-[2px] pb-[5px] border-2 border-violet-900 mr-2'>mn</h1>
        <h1 className='font-yatra text-violet-900 mt-[5px] ml-2 text-3xl'>Mounika</h1>
      </div>

      <section className="MOBILE-MENU flex lg:hidden mt-8 mr-12">
        <div
          className="HAMBURGER-ICON space-y-2 cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            {menuItems.map((menuItem) =>
              <li key={menuItem.name} className='mr-8 hover:text-pink-600 text-gray-700 text-lg font-semibold transition hover:-translate-y-1'><Link to={menuItem.link}>{menuItem.name}</Link></li>
            )}
          </ul>
        </div>
      </section>
      <ul className='mt-8 hidden md:flex md:flex-row  mr-8 '>
        {menuItems.map((menuItem) =>
          <li key={menuItem.name} className='mr-8 hover:text-pink-600 text-gray-700 text-lg font-semibold transition hover:-translate-y-1'><Link to={menuItem.link}>{menuItem.name}</Link></li>
        )}
        <div className='mx-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
      </ul>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}

export default Navbar