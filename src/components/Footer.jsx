import React from 'react'
import icons from '../assets/icons.svg'
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <div className='bg-[#1D1934]'>
            <div className='mx-[5.2rem] pt-[4rem] pb-[5rem] grid grid-cols-11'>
                <div className='col-span-5 mx-5'>
                    <img src={logo} className='py-2'></img>
                    <h6 className='text-white text-lg py-5'>We are a Careers Website providing Information About
                    Latest Jobs In every City Of japan. Also trainings & Courses</h6>
                    <img src={icons} className='py-6'></img>
                    
                </div>
                
               <div className='col-span-1'></div>

                <div className='col-span-1 mx-6'>
                    <h6 className='text-white text-xl font-bold my-2'>Home</h6>
                    <p className='text-white mt-4'>Jobs</p>
                    <p className='text-white'>Courses</p>
                    <p className='text-white'>About Us</p>
                    <p className='text-white'>Login</p>
                </div>

              

                <div className='col-span-1 mx-6'>
                    <h6 className='text-white text-xl font-bold my-2'>Courses</h6>
                    <p className='text-white mt-4'>JavaScript</p>
                    <p className='text-white'>HTML</p>
                    <p className='text-white'>Photography</p>
                    <p className='text-white'>Interview</p>
                </div>

         

                <div className='col-span-1 mx-6'>
                    <h6 className='text-white text-xl font-bold my-2'>Article</h6>
                    <p className='text-white mt-4'>New</p>
                    <p className='text-white'>Old</p>
                    <p className='text-white'>Trend</p>
                    <p className='text-white'>Popular</p>
                </div>

               

                <div className='col-span-1 mx-6'>
                    <h6 className='text-white text-xl font-bold my-2'>Contact us</h6>
                    <p className='text-white my-4'>jobsinjapan@gmail.com</p>
                </div>

                <div className="col-span-1"></div>

            </div>

        </div>
    )
}

export default Footer