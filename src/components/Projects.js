import React from 'react'
import ProjectCards from './ProjectCards'
import { NETFLIX, Netflix_code, Netflix_link, YOUTUBE, YouDes, Youtube_code, Youtube_link, netflixDes } from '../utils/constant'

const Projects = () => {
  return (
    <div className='w-1/2 ml-16 -mt-30 rounded-lg'>
      <h1 className='font-semibold text-2xl -mt-12 ml-2'>My Projects</h1>
        <ProjectCards title={"Netflix-GPT"} overview={netflixDes} src={NETFLIX} link={Netflix_link} code={Netflix_code}/>
        <ProjectCards title={"React-Tube"} overview={YouDes} src={YOUTUBE} link={Youtube_link} code={Youtube_code}/>
        <ProjectCards title={"Netflix-GPT"} overview={netflixDes} src={NETFLIX} link={Netflix_link} code={Netflix_code}/>
    </div>
  )
}

export default Projects