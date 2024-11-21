import React from 'react'
import { BiSolidPencil } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { FaStackOverflow } from "react-icons/fa";

const Blog = () => {
  return (
    <div className='flex-col'>
    <div className='flex justify-end'>
    <div className='absolute pr-20 w-3/12 py-6 space-y-5' >
    <div className='border-x-2 border-b-2 border-amber-400 rounded-md'>
        <div className='my-2 bg-amber-50'>
            <h1 className='text-[13px] font-bold border-y-2  border-amber-400 bg-amber-100 p-3'>The Overflow Blog</h1>
            <div className='pl-3 pr-1 pt-2 space-y-3'>
            <p className='flex text-[13px]'><BiSolidPencil className='text-2xl mr-2'/>Meet the guy responsible for building the Call of Duty game engine</p>
            <p className='flex text-[13px]'><BiSolidPencil className='text-xl mr-2'/>The open-source ecosystem built to reduce tech debt</p>
        </div>
        </div>

        <div>
            <h1 className='text-[13px] font-bold border-y-2 border-amber-400 bg-amber-100 p-3'>Featured on Meta</h1>
            <ul className='pl-3 pr-1 pt-2 space-y-3 my-2  bg-amber-50'>
                <li className='flex text-[13px]'><FiMessageSquare  className='text-xl mr-2 text-blue-400 '/>More network sites to see advertising test</li>
                <li  className='flex text-[13px]'><FiMessageSquare  className='text-lg mr-2  text-blue-400'/>We’re (finally!) going to the cloud!</li>
                <li  className='flex text-[13px]'><FaStackOverflow  className='text-2xl mr-3'/>Call for testers for an early access release of a Stack Overflow extension...</li>
            </ul>
        </div>

           <div  >
                <h1 className='text-[13px] font-bold border-y-2 border-amber-400 bg-amber-100 p-3'>Hot Meta Posts</h1>
                <p className='flex text-[13px] pl-3 pr-1 pt-2 space-y-3 my-2  bg-amber-50'>36 Can Discussions be saved ?</p>
            </div>

    </div>
    <div className='' >
        <h1 className='text-lg font-bold pb-3 ml-2'>Custom Filter</h1>
        <p className=' border-2 text-center p-2 text-blue-500'>add custom filter</p>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Blog