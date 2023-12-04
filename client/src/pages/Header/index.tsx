import React, { useEffect, useRef } from 'react'
import { Header_bg, Header_fg } from '../../assets'
import { motion } from 'framer-motion'
import HoverButton from '../../utils/HoverButton'


type Props = {}

const Header = (props: Props) => {

  return (
    <main className='bg-white md:py-28 sm:py-20 py-16 flex flex-col md:gap-24 sm:gap-20 gap-16 justify-center items-center ' >

      <motion.div
        whileInView={{ translateY: [200, 0], opacity: [0.7, 1] }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center md:gap-16 sm:gap-11 gap-7 lg:px-36 "
      >
        <div className="flex flex-col justify-center items-center md:gap-8 gap-6 ">
          <h1 className='text-center md:text-8xl sm:text-7xl text-5xl ' > <span className='gradient-text ' >Elevate Your</span> <br /> Digital Presence </h1>
          <p className='text-center text-xl text-gray-500 lg:px-32 ' >High-end website and app development for startups and companies where attention to detail and passion dedication matter.</p>
        </div>
        <HoverButton className='py-2 text-primary-blue font-medium text-[18px]  ' >Start a project request {'>'}</HoverButton>
      </motion.div>


      <motion.div
        whileInView={{ translateY: [200, 0], opacity: [0.7, 1] }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className="lg:px-12 lg:w-[88%] w-full flex justify-center "
      >
        <div className="bg-black rounded-xl w-full relative md:p-8 sm:p-6 p-4 lg:h-[40rem] md:h-[36rem] sm:h-[32rem] h-[18rem] flex justify-center items-center ">
          <img src={Header_bg} alt="Header Bg" className='w-full h-full object-cover absolute top-0 right-0 md:p-8 sm:p-6 p-4 rounded-xl ' />
          <img src={Header_fg} alt="Header Fg" className='z-[2] h-[82%] w-[90%] rounded-xl ' />
        </div>
      </motion.div>
    </main>
  )
}

export default Header