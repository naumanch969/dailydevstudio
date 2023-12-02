import React from 'react'
import { Logo } from '../assets'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className=' ' >
            <div className="w-full flex justify-between items-center py-4 border-b-[1px] border-gray-200 ">
                <img src={Logo} alt="Dailydevstudio" className='w-[52px] ' />
                <ul className='flex justify-center gap-8' >
                    <li className='text-[18px] ' >
                        <a href='#'>Portfolio</a>
                    </li>
                    <li className='text-[18px] ' >
                        <a href='#'>Services</a>
                    </li>
                    <li className='text-[18px] ' >
                        <a href='#'>Goals</a>
                    </li>
                </ul>
                <button className='text-[18px] text-primary-blue font-medium ' >Get a Quote</button>
            </div>
        </nav>
    )
}

export default Navbar