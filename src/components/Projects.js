import React from 'react'
import ProjectCards from './ProjectCards'
import { NETFLIX, netflixDes } from '../utils/constant'

const Projects = () => {
  return (
    <div className='w-1/2 bg-gray-200 ml-16 -mt-30 rounded-lg'>
      <h1 className='font-semibold text-2xl -mt-10 ml-2'>My Projects</h1>
        <ProjectCards title={"Netflix-GPT"} overview={netflixDes} src={NETFLIX}/>
        <ProjectCards title={"Netflix-GPT"} overview={netflixDes} src={NETFLIX}/>
        <ProjectCards title={"Netflix-GPT"} overview={netflixDes} src={NETFLIX}/>
    </div>
  )
}

export default Projects