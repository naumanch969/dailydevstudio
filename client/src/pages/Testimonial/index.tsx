import React from 'react'
import Swipe from './Swipe'

type Props = {}

const Testimonial = (props: Props) => {
  return (
    <section className='bg-gray-50  '>

      <div className="wrapper py-28 px-28 flex flex-col gap-16 border-b-[1px] border-gray-200 ">

        <h2 className='text-5xl font-medium text-center ' >What my clients <br /> are saying.</h2>

        <Swipe />
        

      </div>

    </section>
  )
}

export default Testimonial