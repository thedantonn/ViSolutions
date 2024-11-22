import React, { useState } from 'react'
import { RiHomeLine } from "react-icons/ri"
import { PiGlobeHemisphereWest } from "react-icons/pi";
import { IoStarOutline } from "react-icons/io5";
import { SlBriefcase } from "react-icons/sl";
import { HiOutlineUsers, HiXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";




const SecondaryNavbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const closeMenu = () => setIsMenuOpen(!isMenuOpen)
  
  return (
    <div className='absolute'>
      <button
        className="block lg:hidden text-3xl text-gray-600 pl-4 md:-mt-14 -mt-11"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiXMark/> : <RxHamburgerMenu/>}
      </button>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
      <div className={`z-10 absolute bg-white w-52 shadow-md transition-transform duration-300 md:relative lg:translate-x-0 md:shadow-none ${
      isMenuOpen ? "translate-x-0" : "-translate-x-full"
    }`}>
      <ul className="flex flex-col py-6 ">
        <li className="flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full py-2 px-8">
          <RiHomeLine className="text-2xl mr-2 text-orange-500" />
          Home
        </li>
      </ul>

        <ul className='flex flex-col items-start pb-6'>
            <li className='flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full px-8 py-2'><PiGlobeHemisphereWest className='text-2xl mr-2 text-orange-500'/>PUBLIC</li>
            <li className="flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full py-2 pl-16">Questions</li>
            <li className='flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full py-2 pl-16'>Tags</li>
            <li className='flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full py-2 pl-16'>Users</li>
        </ul>

        <ul className='flex flex-col items-start pb-6'>
            <li className='flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full px-8 py-2'><IoStarOutline className='text-2xl mr-2 text-orange-500'/>COLLECTIVES</li>
            <li className='flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full py-2 pl-16 '>Explore Jobs</li>

        </ul>

        <ul className='flex flex-col items-start pb-6'>
            <li className='flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full px-8 py-2'><SlBriefcase className='text-2xl mr-2 text-orange-500'/>FIND JOBS</li>
            <li className='flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full py-2 pl-16 '>Jobs</li>
            <li className='flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full py-2 pl-16'>Companies</li>
            
        </ul>

        <ul className='flex flex-col items-start pb-6'>
            <li className='flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full px-8 py-2'><HiOutlineUsers className='text-2xl mr-2 text-orange-500'/>TEAMS</li>
            <li className='flex items-center font-semibold text-sm hover:bg-orange-100 hover:border-r-4 hover:border-orange-500 w-full py-2 pl-16'>+ Create a team</li>
           
        </ul>
       </div> 
    </div>
  )
}

export default SecondaryNavbar