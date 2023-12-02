import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='bg-white w-full ' >
            <div className="wrapper w-full h-full py-5 flex justify-end items-center ">
                <ul className='flex gap-4 ' >
                    <li className='text-[18px]'>
                        <a href='#'>Portfolio</a>
                    </li>
                    <li className='text-[18px]'>
                        <a href='#'>Services</a>
                    </li>
                    <li className='text-[18px]'>
                        <a href='#'>About</a>
                    </li>
                    <li className='text-[18px]'>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer