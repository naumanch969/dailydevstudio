import React from 'react'
import { Project2, Project3, Project4 } from '../../assets'
import { TProject } from '../../interfaces'

type Props = {}

const Work = (props: Props) => {

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

  /////////////////////////////////////////////////////// STATES ////////////////////////////////////////////////////

  /////////////////////////////////////////////////////// USE EFFECTS ////////////////////////////////////////////////////

  /////////////////////////////////////////////////////// FUNCTIONS ////////////////////////////////////////////////////

  /////////////////////////////////////////////////////// COMPONENTS ////////////////////////////////////////////////////
  const Project = ({ project }: { project: TProject }) => (
    <div className='w-full h-[20rem] relative ' >
      <img src={project.image} alt={project.name} className='absolute top-0 right-0 object-cover w-full h-full rounded-lg ' />
    </div>
  )

  return (
    <section className='py-2'>

      <div className="wrapper py-28 px-28 flex flex-col gap-16 border-b-[1px] border-gray-200 ">

        <h2 className='text-5xl font-medium text-center ' >A small selection <br /> of our work</h2>

        <div className="grid grid-cols-2 gap-8 ">
          {
            projects.map((project, index) => (
              <Project project={project} key={index} />
            ))
          }
        </div>

        <button className='text-primary-blue font-medium text-[18px] ' >Load more projects {'>'}</button>

      </div>

    </section>
  )
}

export default Work