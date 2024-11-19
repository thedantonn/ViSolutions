import React from 'react'
import { ViSolutions_LOGO } from '../constants'
import { BsInboxFill} from "react-icons/bs";
import { IoMdMenu, IoMdTrophy} from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import SearchBar from './SearchBar';




const PrimaryNavbar = () => {
  return (
    <div className='relative w-full'>
        <ul className='h-14 border-b-2 border-t-2 border-t-orange-500 border-gray-300 pb-2 flex justify-between items-center pt-3 pl-20 pr-24'>
            <li className=''><img
            className='w-40 h-12  hover:bg-slate-300'
            src={ViSolutions_LOGO} 
            alt="ViSolutionsLOGO"/></li>
            <li className='hover:bg-slate-300 hover:rounded-full p-2 text-[14px] text-gray-500'>Products</li>
            <li className='hover:bg-slate-300 hover:rounded-full p-2 text-[14px] text-gray-500'>OverflowAi</li>
            <li className='w-6/12'><SearchBar/></li>
            <li className='hover:bg-slate-300 '><GiPlagueDoctorProfile className='text-2xl  text-purple-800'/></li>
            <li className='hover:bg-slate-300'><BsInboxFill className='text-2xl  text-gray-500'/></li>
            <li className='hover:bg-slate-300'><IoMdTrophy className='text-2xl text-green-700'/></li>
            <li className='hover:bg-slate-300'><AiFillQuestionCircle className='text-2xl text-gray-500'/></li>

            <li className='hover:bg-slate-300'><IoMdMenu className='text-2xl  text-gray-500'/></li>
            
        </ul>
    </div>
  )
}

export default PrimaryNavbar