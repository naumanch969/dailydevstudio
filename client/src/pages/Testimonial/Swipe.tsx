import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { person1, person2, person3, person4, person5, person6, person7, person8, person9 } from '../../assets';

export default function Swipe() {

  const testimonials = [
    {
      name: 'Tiffany Chang',
      image: person1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
      company: 'Starlight',
      title: 'Product Manager'
    },
    {
      name: 'Faeka',
      image: person2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
      company: 'Starlight',
      title: 'Product Manager'
    },
    {
      name: 'Tiffany Chang',
      image: person3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
      company: 'Starlight',
      title: 'Product Manager'
    },
    {
      name: 'Tiffany Chang',
      image: person4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
      company: 'Starlight',
      title: 'Product Manager'
    },
    {
      name: 'Tiffany Chang',
      image: person5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
      company: 'Starlight',
      title: 'Product Manager'
    },
    {
      name: 'Tiffany Chang',
      image: person6,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
      company: 'Starlight',
      title: 'Product Manager'
    },
    {
      name: 'Tiffany Chang',
      image: person7,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
      company: 'Starlight',
      title: 'Product Manager'
    },
    {
      name: 'Tiffany Chang',
      image: person8,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
      company: 'Starlight',
      title: 'Product Manager'
    },
    {
      name: 'Tiffany Chang',
      image: person9,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.',
      company: 'Starlight',
      title: 'Product Manager'
    },
  ]

  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
          testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className='h-full flex flex-col justify-between rounded-xl ' >
              <div className="flex flex-col gap-4 px-10 pt-10">
                <img src={testimonial.image} alt={testimonial.name} className='w-16 h-16 object-cover rounded-md ' />
                <p className='text-xl text-black ' >{testimonial.text}</p>
              </div>
              <div className="flex justify-between items-center w-full bg-gray-50 px-10 py-5 ">
                <div className="flex flex-col">
                  <h5 className='text-black' >{testimonial.name}</h5>
                  <span className='text-gray-500 font-light ' >{testimonial.title}</span>
                </div>
                <div className=" ">
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
