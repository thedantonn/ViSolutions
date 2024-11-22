import React from 'react'
import { Link } from 'react-router-dom'
import { FiTriangle ,FiEye} from "react-icons/fi";
import { TiMessages } from "react-icons/ti";

const QuestionCard = ({title,tags,answer_count,name,icon,reputation,views,userLink,questionLink}) => {
  

  return (
    <div className='flex xl:ml-56 lg:ml-56 xl:w-7/12 lg:w-6/12 md:w-8/12 md:ml-5 shadow-lg hover:border-2 hover:border-orange-500'>
      <div className='p-4 w-full space-y-6'>
      <h1 className='text-gray-500 lg:2xl md:text-xl text-[18px] font-semibold'><Link to={questionLink}>{title || `Question Are Loading Soon, if it isn't coming try switching your network as API request might be overloaded`}</Link></h1>

      <div className='flex justify-between '>
        {tags ? (<ul className='flex space-x-3 overflow-y-scroll'>
            {tags.map((tag,index) => (
              <li key={index} className=' md:text-sm text-[12px] rounded-full px-3 py-1 border-2 font-semibold whitespace-nowrap'>
                {tag}
                </li>))}   
          </ul>) : ( <ul className='flex space-x-2'>
            <li className='flex border-2 text-xs bg-gray-200 p-1 font-semibold'>Tags</li>
            <li className='flex border-2 text-xs bg-gray-200 p-1 font-semibold'>Are</li>
            <li className='flex border-2 text-xs bg-gray-200 p-1 font-semibold'>Loading</li>
          </ul>)}
      </div>

      <div className='md:flex space-y-4 justify-between'>
      <ul className='flex space-x-8 md:text-xl text-sm'>
        <li className="whitespace-nowrap flex items-center "><FiTriangle className='text-orange-500 mr-2' size={23}/> {reputation || `♾️`}</li>
        <li className="whitespace-nowrap flex items-center "> <TiMessages className='text-orange-500 mr-2' size={23}/>{answer_count || `0`}</li>
        <li className="whitespace-nowrap flex items-center "><FiEye className='text-orange-500 mr-2' size={23}/>{views || `0`}</li>
      </ul>
      <ul className='flex items-center font-bold'>
      <li className='text-gray-400 text-xs whitespace-nowrap'>asked 55 seconds ago :</li>
      <li className='text-blue-700 text-xs whitespace-nowrap pl-1'><Link to={userLink}>{name || `XyzD44 `}</Link></li>
      </ul>
      </div>
    </div>
    </div>
  )
}

export default QuestionCard
