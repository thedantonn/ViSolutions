import React, {useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSearchedQuestion,isSearch } from '../slice/questionsSlice'

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
                <input
                className='h-8 p-3 border-2 border-gray-300 rounded-md w-full text-xs'
                type='search'
                value={searchInput}
                placeholder={`🔍 Search...`}
                onChange={handleSearchInput}/>
        )
}

export default SearchBar