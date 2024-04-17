import React from 'react'
import companyimg from '../assets/companies.jpg'
import design from '../assets/design.svg'

const Companies = () => {
  return (
    <div>
     <div className='mx-[5.2rem] pt-[21rem] pb-[8rem]'>
        <div>
            <h1 className='font-bold text-5xl pb-[5rem] text-center'> We Are Glad to be Trusted By!</h1>
        </div>

        <div className='p-4'>
            <img src={companyimg}></img>
        </div>
        </div>
      
    </div>
  )
}

export default Companies