import { useDispatch } from 'react-redux';
import { addfilter, isSearch } from '../slice/questionsSlice';
import useHotQuestions from '../hooks/useFilterQuestions';
import { useState } from "react";

const QuestionHeader = () => {
  const [filter,setfilter] = useState('activity')
  const dispatch = useDispatch()

  const handleFilter = (newFilter) => {
    setfilter(newFilter)
    dispatch(addfilter(newFilter))
    dispatch(isSearch(false))
  }
  
  useHotQuestions(filter)
  return (
    <div className='xl:ml-56 lg:ml-52 xl:w-10/12 lg:w-9/12 w-full flex relative flex-col space-y-4 px-4 py-6'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl'>Top Question</h1>
        </div>
        <div className='md:flex justify-between relative w-8/12 space-y-4'>
           <div className='flex text-sm items-center '>
           <button className={`px-5 py-2 text-[15px] rounded-full ${filter === "activity" ? "bg-orange-500 text-white" : "hover:bg-orange-200 text-gray-400 font-semibold"}`} onClick={()=>handleFilter("activity")}>Interesting</button>
           <button className={`px-5 py-2 text-[15px] rounded-full ${filter === "votes" ? "bg-orange-500 text-white" : "hover:bg-orange-200 text-gray-400 font-semibold"}`} onClick={()=>handleFilter("votes")}>Bountied</button>
            <button className={`px-5 py-2 text-[15px] rounded-full ${filter === "hot" ? "bg-orange-500 text-white" : "hover:bg-orange-200 text-gray-400 font-semibold"}`} onClick={()=>handleFilter("hot")}>Hot</button>
            <button className={`px-5 py-2 text-[15px] rounded-full ${filter === "week" ? "bg-orange-500 text-white" : "hover:bg-orange-200 text-gray-400 font-semibold"}`} onClick={()=>handleFilter("week")}>Week</button>
            <button className={`px-5 py-2 text-[15px] rounded-full ${filter === "month" ? "bg-orange-500 text-white" : "hover:bg-orange-200 text-gray-400 font-semibold"}`} onClick={()=>handleFilter("month")}>Month</button>
           </div>
           <button className='xl:px-8 md:px-3 px-2 text-white py-2 xl:text-[15px] lg:text-[12px] md:text-[12px] text-[11px] whitespace-nowrap rounded-full font-semibold bg-blue-500'>ASK QUESTIONS</button>
        </div>
    </div>
  )
}

export default QuestionHeader