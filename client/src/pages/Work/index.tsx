import React, { useEffect, useRef } from 'react'
import { Project2, Project3, Project4 } from '../../assets'
import { TProject } from '../../interfaces'
import { motion } from 'framer-motion'
import VanillaTilt from 'vanilla-tilt';
import HoverButton from '../../utils/HoverButton';

interface TiltedElement extends HTMLDivElement {
  vanillaTilt: {
    destroy: () => void;
  };
}


const Work = () => {

  /////////////////////////////////////////////////////// VARIABLES ////////////////////////////////////////////////////
  const projects = [
    {
      name: 'Project 1',
      image: Project4
    },
    {
      name: 'Project 2',
      image: Project2
    },
    {
      name: 'Project 3',
      image: Project3
    },
    {
      name: 'Project 4',
      image: Project4
    },
  ]
  const tiltRefs: React.RefObject<TiltedElement>[] = Array.from({ length: projects.length }, () => useRef<TiltedElement>(null));

  /////////////////////////////////////////////////////// STATES ////////////////////////////////////////////////////

  /////////////////////////////////////////////////////// USE EFFECTS ////////////////////////////////////////////////////

  /////////////////////////////////////////////////////// FUNCTIONS ////////////////////////////////////////////////////

  /////////////////////////////////////////////////////// COMPONENTS ////////////////////////////////////////////////////
  const Project = ({ project, tiltRef }: { project: TProject, tiltRef: React.RefObject<TiltedElement> }) => {
    useEffect(() => {
      if (tiltRef.current) {
        VanillaTilt.init(tiltRef.current, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        });

        return () => {
          tiltRef.current?.vanillaTilt?.destroy(); // Cleanup on component unmount
        }
      }
    }, []);
    return (
      <motion.div
        ref={tiltRef}
        whileInView={{ translateY: [200, 0], opacity: [0.7, 1] }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className='w-full md:h-[20rem] sm:h-[18rem] h-[16rem] relative '
      >
        <img src={project.image} alt={project.name} className='absolute top-0 right-0 object-cover w-full h-full rounded-lg ' />
      </motion.div>
    )
  }

  return (
    <section className='py-2'>

      <div className="wrapper md:py-28 sm:py-20 py-16 lg:px-28 md:px-16 flex flex-col md:gap-16 gap-8 border-b-[1px] border-gray-200 ">

        <motion.h2
          whileInView={{ translateY: [200, 0], opacity: [0.7, 1] }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='md:text-6xl sm:text-5xl text-[40px] font-medium text-center '
        >A small selection <br /> of our work</motion.h2>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6 ">
          {projects.map((project, index) => (
            <Project key={index} project={project} tiltRef={tiltRefs[index]} />
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <HoverButton className='text-primary-blue font-medium text-[18px] ' >Load more projects {'>'}</HoverButton>
        </div>

      </div>

    </section>
  )
}

export default Work