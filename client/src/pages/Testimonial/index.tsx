import React from 'react'
import Swipe from './Swipe'
import { motion } from 'framer-motion'

type Props = {}

const Testimonial = (props: Props) => {
  return (
    <section className='bg-gray-50  '>

      <div className="wrapper md:py-28 sm:py-20 py-16 md:px-28 flex flex-col md:gap-16 gap-8 border-b-[1px] border-gray-200 ">

        <motion.h2
          whileInView={{ translateY: [200, 0], opacity: [0.7, 1] }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='md:text-6xl sm:text-5xl text-[40px] font-medium text-center ' >What my clients <br /> are saying.</motion.h2>

        <motion.div
          whileInView={{ translateY: [200, 0], opacity: [0.7, 1] }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="">
          <Swipe />
        </motion.div>


      </div>

    </section >
  )
}

export default Testimonial