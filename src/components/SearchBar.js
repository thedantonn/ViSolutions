import React from 'react'

const SearchBar = () => {
        return (
                <input
                className='h-8 p-3 border-2 border-gray-300 rounded-md w-full'
                type='search'
                placeholder={`🔍 Search...`}/>
        )
}

export default SearchBar