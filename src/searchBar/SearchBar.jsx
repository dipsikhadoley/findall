import React from 'react'
import { useState } from 'react'
const searchData = [
    {
        name:'laptop',
        image:
    }
]

const SearchBar = () => {
    // search state
    const [search,setSearch]= useState("")
    // serach filter data
    const filterSearchData = searchData.filter((obj)=>obj.name.toLowerCase().includes(search)).slice(0,8)
  return (
    <div className=''>
        {/* search input */}
        <div className='input flex justify-center'>
            <input type="text" 
            placeholder='Search here' 
            onChange={(e)=> setSearch(e.target.value)}
            className='bg-gray-200 placeholder:-gray-400 rounded-lg px-2 py-2e-96 lg:w-96 md:w-36 outline-none text-black'/>
        </div>

        {/* search drop-down */}
        <div className='flex justify-center'>{
            search && <div className='block absolute bg-gray-300 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2'></div> 
        }

        </div>
    </div>
  )
}

export default SearchBar