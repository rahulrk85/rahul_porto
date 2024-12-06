import React from 'react'
import ProjectCards from './ProjectCards'
import { E_des, E_link, E_photo, Food_Photo, Food_code, Food_des, Food_link, NETFLIX, Netflix_code, Netflix_link, YOUTUBE, YouDes, Youtube_code, Youtube_link, netflixDes } from '../utils/constant'

const Projects = () => {
  return (
    <div className='w-full md:w-1/2 md:ml-16 mt-20 md:-mt-30 rounded-lg'>
      <div className='items-center justify-center flex flex-col md:inline'>
        <h1 className='font-semibold text-3xl md:text-6xl mt-20 md:-mt-12 text-center pb-10 font-serif'>My Projects</h1>
        <ProjectCards title={"Ecommerce"} overview={E_des} src={E_photo} link={Food_code} code={E_link} color="two"/>
        <ProjectCards title={"Netflix-GPT"} overview={netflixDes} src={NETFLIX} link={Netflix_code} code={Netflix_link} color="four"/>
        <ProjectCards title={"Youtube-clone"} overview={YouDes} src={YOUTUBE} link={Youtube_code} code={Youtube_link} color="three"/>
        <ProjectCards title={"Food-Ordering-App"} overview={Food_des} src={Food_Photo} link={Food_code} code={Food_link} color="one"/>
      </div>
    </div>
  )
}

export default Projects