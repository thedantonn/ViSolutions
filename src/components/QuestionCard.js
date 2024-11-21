import React from 'react'
import { Link } from 'react-router-dom'
import { USER_DEFAULT_ICON } from '../constants'

const QuestionCard = ({title,tags,answer_count,name,icon,reputation,views,userLink,questionLink}) => {
  

  return (
    <div className='p-2 flex ml-60 pl-28 mr-auto w-7/12 border-t-2 border-gray-200'>
      <div className='flex flex-col space-y-1 p-2 text-right text-sm'>
        <h1 className="whitespace-nowrap"> 0 votes</h1>
        <h1 className="whitespace-nowrap">{answer_count || `0`} answers</h1>
        <h1 className="whitespace-nowrap">{views || `0`} views</h1>
      </div>
      <div className='pl-4 text-left w-full'>
      <h1 className='text-blue-500 text-xl font-normal'><Link to={questionLink}>{title || `Question Are Loading Soon...`}</Link></h1>
      <p className='text-gray-500 text-sm'>Description</p>
      <div className='flex justify-between w-full pt-4 '>
        {tags ? (<ul className='flex space-x-2 overflow-hidden'>
            {tags.map((tag) => (
              <li className=' text-xs bg-gray-200 p-1 font-semibold whitespace-nowrap'>
                {tag}
                </li>))}   
          </ul>) : ( <ul className='flex space-x-2'>
            <li className='flex border-2 text-xs bg-gray-200 p-1 font-semibold'>Tags</li>
            <li className='flex border-2 text-xs bg-gray-200 p-1 font-semibold'>Are</li>
            <li className='flex border-2 text-xs bg-gray-200 p-1 font-semibold'>Loading</li>
          </ul>)}
      
          <ul className='flex items-center space-x-2 pl-2'>
            {icon ? (<li><img className='text-blue-700 w-4' src={icon || USER_DEFAULT_ICON} alt='loding' onError={(e) => {
              e.target.src = USER_DEFAULT_ICON
            }}/></li>) : (<img className='text-blue-700  w-1/12' src={USER_DEFAULT_ICON} alt=''/>)}
            <li className='text-blue-700 text-xs whitespace-nowrap'><Link to={userLink}>{name || `XyzD44 `}</Link></li>
            <li className='text-gray-800 font-bold text-xs whitespace-nowrap'>{reputation || `♾️`}</li>
            <li className='text-gray-400 text-xs whitespace-nowrap'>asked {`0`} mins ago</li>
          </ul>
      </div>
      </div>
    </div>
  )
}

export default QuestionCard
