import React from 'react'
import { ViSolutions_LOGO } from '../constants'
import { BsInboxFill} from "react-icons/bs";
import { IoMdMenu, IoMdTrophy} from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GiPlagueDoctorProfile } from "react-icons/gi";




const PrimaryNavbar = () => {
    const SearchBar = () =>{
        return (
                <input
                className='p-2 m-2 border-2 border-gray-300 rounded-md w-full'
                type='search'
                placeholder={`🔍 Search...`}/>
        )
    }
  return (
    <div>
        <ul className='h-14 border-2 border-black flex justify-between items-center pl-16 pr-24'>
            <li className='hover:bg-slate-300'><img
            className='w-56 h-32'
            src={ViSolutions_LOGO} 
            alt="ViSolutionsLOGO"/></li>
            <li className='hover:bg-slate-300 hover:rounded-full p-2'>Products</li>
            <li className='hover:bg-slate-300 hover:rounded-full p-2'>OverflowAi</li>
            <li className='w-6/12'><SearchBar/></li>
            <li className='hover:bg-slate-300 '><GiPlagueDoctorProfile className='text-2xl'/></li>
            <li className='hover:bg-slate-300'><BsInboxFill className='text-2xl'/></li>
            <li className='hover:bg-slate-300'><IoMdTrophy className='text-2xl'/></li>
            <li className='hover:bg-slate-300'><AiFillQuestionCircle className='text-2xl'/></li>

            <li className='hover:bg-slate-300'><IoMdMenu className='text-2xl'/></li>
            
        </ul>
    </div>
  )
}

export default PrimaryNavbar