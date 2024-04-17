import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div>
        <div className='grid grid-cols-12 mx-[5.2rem] justify-center'> 
        <div className=' col-span-2 justify-start my-3 items-end align-middle '>
          <img src={logo} className='items-end align-middle pt-2'></img>
        </div>

        <div className='nav-links  col-span-6  flex flex-row justify-evenly py-3 text-gray font-base text-lg items-center'>
        <a href='#' className='border-b-2 shadow-b text-gray-500'>Home</a>
        <a href='#'>About Us</a>
        <a href='#'>Job Listings</a>
        <a href='#'>Contact</a>
        </div>

        <div className='col-span-1'></div>

        <div className='Login_container  col-span-3 flex flex-row justify-end gap-3 my-3'>
        <button className=' border-2 border-[#6E00BE] p-2 w-[50%]  rounded text-[#6E00BE] font-bold text-base'>Apply For Jobs</button>
        <button className='bg-[#6E00BE] text-white p-1 w-[50%]  rounded font-bold text-lg'>Login</button>
        
        </div>
        </div>
    </div>
  )
}

export default Navbar