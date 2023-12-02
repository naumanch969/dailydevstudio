import React from 'react'
import { work_together } from '../../assets'

type Props = {}

const index = (props: Props) => {
    return (
        <div className='w-full h-[30rem] flex flex-col gap-16 justify-center items-center relative text-white '>

            <img src={work_together} alt="Work Together" className='absolute top-0 right-0 w-full h-full object-cover z-[1] ' />

            <h2 className='text-5xl font-semibold text-center capitalize z-[2] leading-[4rem] tracking-[4px] ' >INTERESTED IN <br /> WORKING TOGETHER?</h2>

            <button className='capitalize bg-primary-blue text-white px-12 py-3 text-xl rounded-lg z-[2]' >Start Free</button>

        </div>
    )
}

export default index