import React from 'react'
import { NETFLIX } from '../utils/constant'

const ProjectCards = ({title,overview,src}) => {
  return (
    <div className='flex grid-flow-col '>
        <div className='col-span-6 w-[1200px] my-7 ml-2 p-4'>
            <img className='rounded-lg' alt='proImg' src={src}/>
        </div>
        <div className='col-span-6 my-4 p-4 font-semibold'>
          <h1 className='font-bold text-2xl mb-3'>{title}</h1>
            <h1 className='font-sans mb-4'>{overview}</h1>
            <div className='flex justify-center text-white'>
              <button className='py-2 mr-10 px-5 bg-black rounded-full hover:bg-opacity-70'>Code 🚀</button>
              <button className=' px-3 bg-black rounded-2xl hover:bg-opacity-70'>Live Demo 🔗</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards