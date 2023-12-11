import React, { useEffect, useRef } from 'react'
import { Project1, Project2, Project3, Project4, Project5, Project6, Project7 } from '../../assets'
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
      index: 0,
      createdAt: '2023',
      image: Project1,
      src: 'https://growmarketing.netlify.app',
      name: 'CRM',
      subHeading: 'Customer Relation Management System for Real Estate Agency',
      detail: 'As a CRM Architect & Technical Manager, I specialize in crafting robust Customer Relationship Management (CRM) solutions using the MERN stack. Currently overseeing the entire development process, I am actively involved in resolving any technical challenges that arise, ensuring the seamless functionality and optimal performance of the CRM system. My role encompasses end-to-end responsibility, from initial architecture design to ongoing technical issue resolution, contributing to the success of the CRM project.'
  },
  {
      index: 1,
      createdAt: '2023',
      image: Project3,
      src: 'https://deziskin.netlify.app',
      name: 'Deziskin',
      subHeading: 'An ecommerce website of beauty products',
      detail: 'Deziskin stands as a showcase in the e-commerce realm, a MERN stack-powered website dedicated to a singular, premium product. I spearheaded the end-to-end development, seamlessly integrating MongoDB, Express.js, React, and Node.js to deliver an immersive shopping experience. From intuitive user interfaces to robust backend functionalities, Deziskin embodies my expertise in crafting dynamic, full-stack solutions for streamlined online retail'
  },
  {
      index: 2,
      createdAt: '2023',
      image: Project2,
      src: 'https://doctorguide.ai',
      name: 'guitaristic',
      subHeading: 'branding',
      detail: 'As the lead Frontend Developer for a collaborative AI project, I spearheaded the creation of an intuitive user interface using React.js. With a focus on translating intricate AI functionalities into user-friendly designs, I am currently dedicated to refining and addressing frontend aspects. My role is centered on delivering a polished and visually compelling interface that seamlessly complements the advanced capabilities of our AI tool.'
  },
  {
      index: 3,
      createdAt: '2023',
      image: Project4,
      src: 'https://shopy-dashboard.netlify.app/ecommerce',
      name: 'Shoppy Dashboard',
      subHeading: 'Dashboard application',
      detail: 'The Dashboard Application is a web platform for viewing business data. It shows key metrics like user stats, product info, revenue, and expenses in one place. It\'s user-friendly, offers real-time insights, and helps with decision-making. It\'s useful for startups and big companies, improving productivity through data visualization and analysis.',
  },
  {
      index: 4,
      createdAt: '2023',
      image: Project7,
      src: 'https://naumanch.netlify.app/',
      name: 'Portfolio Website',
      subHeading: 'Portfolio Website',
      detail: 'The Portfolio Website of a Full Stack Developer, built in React and Framer Motion, showcases the developer\'s skills and projects. With an intuitive interface and smooth animations, the website demonstrates the developer\'s expertise in front-end and back-end technologies. Visitors can explore detailed project descriptions and examples of their work, making it an impressive representation of their abilities to potential employers and clients'
  },
  {
      index: 5,
      createdAt: '2023',
      image: Project5,
      src: 'https://musif.netlify.app',
      name: 'Musif',
      subHeading: 'Musif',
      detail: 'The Music Website utilizes third-party APIs to create an engaging platform for music enthusiasts. It offers trending music, top charts, and personalized recommendations, powered by popular music streaming APIs.'
  },
  {
      index: 6,
      createdAt: '2023',
      image: Project6,
      src: 'https://ncbank-landing-page.netlify.app/',
      name: 'Landing Page',
      subHeading: 'Landing Page',
      detail: 'The Bank Landing Page is a user-friendly web interface offering easy access to essential banking services. It showcases account options, loans, credit cards, and investments. With a focus responsive design, it ensures a seamless banking experience on any device.'
  },
  // {
  //     createdAt: '2023',
  //     image: project3,
  //     src:'https://ncexercises.netlify.app/',
  //     name: 'Exercises',
  //     subHeading: 'Exercises',
  //     detail: 'Designed and developed with ReactJS, the Search-Based Exercise Website is a dynamic web project. It seamlessly integrates third-party services for exercise data, offering users a straightforward and effective platform to search for exercises and access comprehensive information.'
  // },
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
          {/* <HoverButton className='py-2 text-primary-blue font-medium text-[18px] ' >Load more projects {'>'}</HoverButton> */}
        </div>

      </div>

    </section>
  )
}

export default Work