import React from 'react'
import { BiSolidPencil } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { FaStackOverflow } from "react-icons/fa";

const Blog = () => {
  return (
    <div className='relative md:absolute flex right-0 md:w-3/12 top-16 md:h-auto '> 
        <div className='bg-gradient-to-b from-white to-gray-100 my-2 pr-4 pt-10 '>
            <h1 className='text-lg font-bold p-3'>The Overflow Blog</h1>
            <div className='pl-3 pr-1 pt-2 space-y-3 text-gray-400 font-semibold'>
            <p className='flex text-[13px]'><BiSolidPencil className='text-2xl mr-2'/>Meet the guy responsible for building the Call of Duty game engine</p>
            <p className='flex text-[13px]'><BiSolidPencil className='text-xl mr-2'/>The open-source ecosystem built to reduce tech debt</p>
            <h1 className='text-lg font-bold p-3'>Featured on Meta</h1>
            <ul className='pl-3 pr-1 pt-2 space-y-3 my-2  text-gray-400 font-semibold'>
                <li className='flex text-[13px]'><FiMessageSquare  className='text-xl mr-2 '/>More network sites to see advertising test</li>
                <li  className='flex text-[13px]'><FiMessageSquare  className='text-lg mr-2 '/>We’re (finally!) going to the cloud!</li>
                <li  className='flex text-[13px]'><FaStackOverflow  className='text-2xl mr-3'/>Call for testers for an early access release of a Stack Overflow extension...</li>
            </ul>
           <div className='bg-gray-100' >
                <h1 className='text-lg font-bold  p-3'>Hot Meta Posts</h1>
                <p className='flex text-[13px] pl-3 pr-1 pt-2 space-y-3 my-2 text-gray-400 font-semibold'><span className='text-black pr-3 '>8</span> Tags (driver) and (device-driver] appear to be
                    redundant</p>
                <p className='flex text-[13px] pl-3 pr-1 pt-2 space-y-3 my-2 text-gray-400 font-semibold'><span  className='text-black pr-3 '>27</span> How to handle dupes where A is closed as dup
                of B but I have an answer that</p>
                <p className='flex text-[13px] pl-3 pr-1 pt-2 space-y-3 my-2 text-gray-400 font-semibold'><span  className='text-black pr-3 '>27</span> Ambiguous tag (containers)</p>
            </div>

    </div>
    <div className='pt-6' >
        <h1 className='text-lg font-bold pb-3 ml-2'>Custom Filter</h1>
        <p className=' border-2 text-center p-2 text-blue-500'>add custom filter</p>
    </div>
    </div>
    </div>
 
  )
}
export default Blog