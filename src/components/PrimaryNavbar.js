import React, { useState } from 'react'
import { ViSolutions_LOGO } from '../constants'
import { BiMessageAltDetail } from "react-icons/bi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { LuTrophy,LuMessageSquare } from "react-icons/lu";
import SearchBar from './SearchBar';
import { HiXMark } from 'react-icons/hi2';
import { RxHamburgerMenu } from "react-icons/rx";



const PrimaryNavbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className='relative w-full flex justify-between lg:px-8 pl-14 pr-4 lg:py-6 md:py-6 sm:py-5 py-4'>
        <ul className='flex items-center space-x-10 w-full'>
            <img
            className='lg:w-44 w-36 h-8 lg:h-10 mr-6'
            src={ViSolutions_LOGO} 
            alt="ViSolutionsLOGO"/>
            <li className='w-6/12 hidden lg:block md:block'><SearchBar/></li>
            <li className='text-gray-400 font-medium text-[14px] hover:bg-slate-300 hover:rounded-full'>Products</li>
        </ul>
        <button
        className="block md:hidden text-3xl text-gray-600"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiXMark/> : <RxHamburgerMenu/>}
      </button>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
        <ul className={`flex-col md:flex-row flex md:items-center md:space-x-6 absolute md:relative z-20 ${
          isMenuOpen ? "top-14 w-full left-0 bg-white shadow-lg p-4 " : "hidden"
        } md:flex md:bg-transparent md:shadow-none md:top-0 md:w-auto`}>
          <li className="md:hidden block mb-4">
          <SearchBar />
        </li>
            <li className='hover:bg-slate-300'><LuMessageSquare className='text-3xl  text-gray-400'/></li>
            <li className='hover:bg-slate-300'><LuTrophy className='text-3xl text-gray-400'/></li>
            <li className='hover:bg-slate-300'><BiMessageAltDetail className='text-3xl text-gray-400'/></li>
            <li className='hover:bg-slate-300 border-2 w-fit rounded-full border-black bg-orange-500'><GiPlagueDoctorProfile className='text-3xl  text-white'/></li>
        </ul>
    </div>
  )
}

export default PrimaryNavbar