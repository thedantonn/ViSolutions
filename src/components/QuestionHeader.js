import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoFilterSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addfilter, isSearch } from '../slice/questionsSlice';
import useHotQuestions from '../hooks/useHotQuestions';

const QuestionHeader = () => {
  const [filter,setfilter] = useState('')
  const dispatch = useDispatch()

  const handleFilter = (newFilter) => {
    setfilter(newFilter)
    dispatch(addfilter(newFilter))
    console.log(newFilter)
    dispatch(isSearch(false))
  }
  
  useHotQuestions(filter)
  return (
    <div className='ml-auto w-10/12 flex flex-col space-y-4 border-r-2 px-6 py-6'>
        <div className='flex justify-between w-8/12 items-center text-center ml-6'>
            <h1 className='text-3xl'>All Questions</h1>
            <button className='px-3 py-2 text-white font-semibold bg-blue-500 text-sm rounded-md'>Ask Question</button>
        </div>
        <div className='flex ml-6 items-center'>
            <h1 className='mr-32 text-xl font-light '>24,241,646 questions</h1>
           <div className='flex mr-3 border-2 rounded-md p-1 text-sm items-center '>
            <button className='px-2 py-1 hover:bg-gray-100 hover:rounded-md' onClick={()=>handleFilter("hot")}>Hot</button>
            <button className='px-2 py-1 hover:bg-gray-100 hover:rounded-md' onClick={()=>handleFilter("week")}>Week</button>
            <button className='px-2 py-1 hover:bg-gray-100 hover:rounded-md' onClick={()=>handleFilter("month")}>Month</button>
            <button className='px-2 py-1 hover:bg-gray-100 hover:rounded-md' onClick={()=>handleFilter("bountied")}>Bountied</button>
            <button className='px-2 py-1 hover:bg-gray-100 hover:rounded-md flex items-center'>More<IoMdArrowDropdown/></button>
           </div>
           <button className='p-2 border-2 rounded-md hover:bg-blue-200 text-blue-600 border-blue-600 flex items-center text-sm'><IoFilterSharp className='mr-2'/>Filter</button>
        </div>
    </div>
  )
}

export default QuestionHeader