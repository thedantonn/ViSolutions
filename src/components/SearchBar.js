import React, {useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSearchedQuestion,isSearch } from '../slice/questionsSlice'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
        const dispatch = useDispatch()
        const [searchInput, setSearchInput] = useState('');
        const searchTimeout = useRef(null)

        const getSearchResults = async (query) => {
                if (query.trim()){
                        const data = await fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&tagged=${query}&site=stackoverflow`)
                        const json = await data.json()
                        dispatch(addSearchedQuestion(json?.items))
                        dispatch(isSearch(true))
                     } 
               
        }
        const handleSearchInput = (e) => {
                const query = e.target.value
                setSearchInput(query)

                if(searchTimeout.current) {
                        clearTimeout(searchTimeout.current)
                }

                searchTimeout.current = setTimeout(()=>{
                        getSearchResults(query)
                },300)
        }
        return (
                <div className='flex border-2 border-gray-300 rounded-full px-3'>
                <input
                className='p-3 rounded-full w-full text-[16px] focus:outline-none'
                type='search'
                value={searchInput}
                placeholder={`Search Your Answers Here...`}
                onChange={handleSearchInput}/>
                <button className='cursor-text'><HiOutlineMagnifyingGlass size={25} className='text-orange-500'/></button>
                </div>
        )
}

export default SearchBar