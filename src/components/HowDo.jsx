import React from 'react'
import background from '../assets/background.svg'
import img1 from '../assets/img1.svg'
import img2 from '../assets/img2.svg'
import img3 from '../assets/img3.svg'

const HowDo = () => {
  return (
    <div  style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
        <div className='mx-[5.2rem] pt-[5rem] pb-[7rem] '>
      <div>
        <h1 className='font-bold text-4xl pb-2 text-center'>How We Do?</h1>
      </div>

      <div className="cards flex flex-row gap-5 my-5 justify-between">
       <div className="card1 flex flex-col p-4 justify-center gap-4 w-[30%] items-center">
          <img src={img1} className='p-4 h-[90px] w-[90px] align-center'></img>
          <div className='flex flex-col gap-3'>
          <h4 className='text-center text-black font-semibold text-xl'>STEP 1: COMPLETE PROFILE</h4>
          <h6 className='text-center'>Once you are approved, we showcase you to leading Indian technology startups</h6>
          </div>
       </div>

       <div className="card2 flex flex-col p-4 justify-center gap-4 w-[30%] items-center">
          <img src={img2} className='p-4 h-[90px] w-[90px] align-center'></img>
          <div className='flex flex-col gap-3'>
          <h4 className='text-center text-black font-semibold text-xl'>STEP 2: RECEIVE JOB OFFERS</h4>
          <h6 className='text-center'>Companies start sending interview requests. Talk to only the ones you like.</h6>
          </div>
       </div>

       <div className="card3 flex flex-col p-4 justify-center gap-4 w-[30%] items-center">
          <img src={img3} className='p-4 h-[90px] w-[90px] align-center'></img>
          <div className='flex flex-col gap-3'>
          <h4 className='text-center text-black font-semibold text-xl'>STEP 3: ACCEPT DREAM JOB</h4>
          <h6 className='text-center'>Compare your offers and accept the best one. Hired!</h6>
          </div>
       </div>

       
       </div>

        </div>
    </div>
  )
}

export default HowDo