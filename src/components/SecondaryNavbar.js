import React from 'react'
import { FaInfoCircle } from "react-icons/fa";
import { IoMdHome,IoMdPricetags,IoMdBriefcase } from "react-icons/io";
import { RiQuestionnaireFill } from "react-icons/ri";
import { MdLabel } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { BiMessageDetail } from "react-icons/bi";



const SecondaryNavbar = () => {
  return (
    <div className='flex flex-col w-44 border-r-2 ml-16 px-3'>
        <div className='flex flex-col items-start py-6 '>
            <h1 className='flex items-center text-center font-semibold text-sm hover:bg-gray-100 w-full p-1'><IoMdHome className='text-2xl mr-2'/>Home</h1>
            <h1 className='flex items-center text-center font-semibold text-sm hover:bg-gray-100 w-full p-1'><RiQuestionnaireFill className='text-xl mr-2'/>Questions</h1>
            <h1 className='flex items-center text-center font-semibold text-sm hover:bg-gray-100 w-full p-1'><IoMdPricetags className='text-xl mr-2'/>Tags</h1>
        </div>
        <div className='flex flex-col items-start pb-6'>
            <h1 className='flex items-center text-center font-semibold text-sm hover:bg-gray-100 w-full p-1'><MdLabel className='text-2xl mr-2'/>Saves</h1>
            <h1 className='flex items-center text-center font-semibold text-sm hover:bg-gray-100 w-full p-1'><HiMiniUsers className='text-2xl mr-2'/>Users</h1>
            <h1 className='flex items-center text-center font-semibold text-sm hover:bg-gray-100 w-full p-1'><PiBuildingOfficeFill className='text-2xl mr-2'/>Companies</h1>
        </div>
        <div className='flex flex-col items-start'> 
            <div className='flex w-full space-y-2 items-center'>
                <h1 className='w-11/12 text-left text-[12px] font-bold'>LABS</h1>
                <FaInfoCircle className='items-right text-sm text-gray-500'/>
            </div>
            <div className='pb-6'>
                <h1 className='flex items-center text-center font-semibold text-sm hover:bg-gray-100 w-full p-1'><IoMdBriefcase className='text-2xl mr-2'/>Jobs</h1>
                <h1 className='flex items-center text-center font-semibold text-sm hover:bg-gray-100 w-full p-1'><BiMessageDetail className='text-2xl mr-2'/>Discussions</h1>   
        </div>
        </div>
        <div className='flex flex-col items-start pb-6'>
            <div className='flex w-full items-center text-center pb-2'>
                <h1 className='w-1/2 text-left text-[12px] font-bold'>COLLECTIVES</h1>
                <h1 className='w-6/12 text-right'> + </h1>
            </div>
            <p className='text-gray-500 font-semibold text-[10px] text-start'>Communities for your favorite technologies.</p> 
            <p className='underline font-semibold text-[10px] text-start'>Explore all Collectives</p>
        </div>
        <div className='flex flex-col items-start pb-6'>
            <div className='flex w-full items-center text-center pb-2'>
                <h1 className='w-1/2 text-left text-[12px] font-bold'>TEAMS</h1>
                <h1 className='w-6/12 text-right'> + </h1>
            </div>
           <div className='text-gray-500 font-semibold text-[10px] text-start'>
           <p >Ask questions, find answers and collaborate at work with Stack Overflow for Teams. <span className='underline text-black'>Explore Teams</span></p>
           <p><span className='underline text-black'>Looking for your Teams?</span></p>
           </div>
        </div>
    </div>
  )
}

export default SecondaryNavbar