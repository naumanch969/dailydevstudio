import React from 'react'
import { Logo } from '../assets'
import HoverButton from '../utils/HoverButton'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className=' ' >
            <div className="w-full flex justify-between items-center py-4 border-b-[1px] border-gray-200 ">
                <img src={Logo} alt="Dailydevstudio" className='md:w-[52px] sm:w-[42px] w-[32px] ' />
                <ul className='flex justify-center md:gap-8 sm:gap-6 gap-4 ' >
                    <HoverButton className='py-1 sm:text-[18px] text-[1rem]  ' >
                        <a href='#' className='cursor-none' >Portfolio</a>
                    </HoverButton>
                    <HoverButton className='py-1 sm:text-[18px] text-[1rem] ' >
                        <a href='#' className='cursor-none' >Services</a>
                    </HoverButton>
                    <HoverButton className='py-1 sm:text-[18px] text-[1rem] ' >
                        <a href='#' className='cursor-none' >Goals</a>
                    </HoverButton>
                </ul>
                <button className='sm:block hidden md:text-[18px] text-[16px] text-primary-blue font-medium ' >Get a Quote</button>
            </div>
        </nav>
    )
}

export default Navbar