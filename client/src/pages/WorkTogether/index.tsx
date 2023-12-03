import React from 'react'
import { work_together } from '../../assets'

type Props = {}

const index = (props: Props) => {
    return (
        <div className='w-full md:h-[30rem] sm:h-[25rem] h-[20rem] flex flex-col md:gap-16 sm:gap-12 gap-8 justify-center items-center relative text-white '>

            <img src={work_together} alt="Work Together" className='absolute top-0 right-0 w-full h-full object-cover z-[1] ' />

            <h2 className='md:text-5xl sm:text-[44px] text-[32px] font-semibold text-center capitalize z-[2] sm:leading-[4rem] md:tracking-[4px] ' >INTERESTED IN <br /> WORKING TOGETHER?</h2>

            <button className='capitalize bg-primary-blue text-white md:px-12 sm:px-10 px-8 sm:py-3 py-2.5 text-xl rounded-lg z-[2]' >Start Free</button>

        </div>
    )
}

export default index