import React from 'react'
import { Header_bg, Header_fg } from '../../assets'


type Props = {}

const Header = (props: Props) => {

  return (
    <main className='bg-white py-28 flex flex-col gap-24 ' >

      <div className="flex flex-col justify-center items-center gap-16 px-36 ">
        <div className="flex flex-col justify-center items-center gap-8 ">
          <h1 className='text-center text-8xl ' > <span className='text-primary-blue ' >Elevate Your</span> <br /> Digital Presence </h1>
          <p className='text-center text-xl text-gray-500 px-32 ' >High-end website and app development for startups and companies where attention to detail and passion dedication matter.</p>
        </div>
        <button className='text-primary-blue font-medium text-[18px] ' >Start a project request {'>'}</button>
      </div>


      <div className="px-12">
        <div className="bg-black rounded-xl w-full relative p-8 h-[40rem] flex justify-center items-center ">
          <img src={Header_bg} alt="Header Bg" className='w-full h-full object-cover absolute top-0 right-0 p-8 rounded-xl ' />
          <img src={Header_fg} alt="Header Fg" className='z-[2] h-[82%] rounded-xl '  />
        </div>
      </div>
    </main>
  )
}

export default Header