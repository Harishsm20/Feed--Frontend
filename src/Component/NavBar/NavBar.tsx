// import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BiBookAdd } from "react-icons/bi";
import { FaBell } from "react-icons/fa";



const NavBar = () => {
  return (
    <div className='sticky top-0 w-full h-16 mt-2 flex items-center px-5 shadow-xl justify-between'>
      <div>Logo</div>
      <div className="flex justify-start px-5 py-2 items-center border border-gray-200 rounded-full shadow-lg w-1/4"> 
        <FaSearch />
        <input type="text" className="w-full focus:outline-none pl-3" placeholder="Search" /> 
    </div>
    <div className="flex items-center gap-10 text-lg">
        <div className="flex items-center gap-1">            
            <BiBookAdd />
            Blog
        </div>
        <div>
            <FaBell />
        </div>
        <div className="rounded-full border-2 w-12 h-12 flex items-center justify-center">
            P
        </div>
        <a href="/login">
        <div className="flex items-center w-20 justify-center py-2 bg-[#b8a500] text-white rounded-2xl hover:bg-[#e0e0e0] hover:text-[#b8a500] transition duration-500  p-2">
            Sign In
        </div>
        </a>
    </div>
    
    </div>
  )
}

export default NavBar;
