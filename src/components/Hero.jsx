import React from 'react'
import search from '../assets/search.svg'
import location from '../assets/location.svg'
import heroimg from '../assets/hero-img.svg'
import design from '../assets/design.svg'

const Hero = () => {

  return (

    <>
    <div className='bg-gradient-to-r from-[#c69de49a] bg-opacity-60 via-[#d6c0e600]  to-[#e2ccf2c6] relative'> 
    
    <div className='mx-[5.2rem] pt-[8.4rem] pb-[25rem] '>

        <div className='mb-[2.8rem]'>
        <h1 className='font-bold text-5xl pb-2'>Explore Exciting <span className='text-[#6E00BE] font-bold font-2xl'>Career Opportunities</span> in Japan.</h1>
        <h6 className='text-2xl text-gray-600'> Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</h6>
        </div>

        <div className='input_container flex flex-row   bg-white rounded '>
        <div className='flex flex-row w-[45%] p-5 gap-3 shadow-md'>
        <img className='' src={search}></img>
        <input type='text' placeholder='What position are you looking for?' className='w-[90%]'></input>
        </div>

        <div className='flex flex-row w-[40%] p-5 gap-3 border-l shadow-md'>
        <img src={location}></img>
        <input type='search' placeholder='Location'></input>
        </div>

        <button className='bg-[#6E00BE] text-white p-1   rounded font-bold text-lg w-[15%]' >Apply for Jobs</button>
        </div>
        
     

        
    </div>
   
    </div>
    {/* hero section image */}
    <div className='absolute top-[405px] right-[52px] z-10'>
            <img src={heroimg} className='z-10'></img>
        </div>
    
    

        
    </>

    
  )
}

export default Hero