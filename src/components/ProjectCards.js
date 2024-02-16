import React from 'react'



const ProjectCards = ({title,overview,src,link,code}) => {





  return (
    <div className='flex grid-flow-col border shadow-xl rounded-xl mb-8'>
        <div className='col-span-6 w-[1200px] my-7 ml-2 p-4'>
            <img className='rounded-lg' alt='proImg' src={src}/>
        </div>
        <div className='col-span-6 my-4 p-4 font-semibold'>
          <h1 className='font-bold text-2xl mb-3'>{title}</h1>
            <h1 className='font-sans mb-4'>{overview}</h1>
            <div className='flex justify-center text-white'>
              <a href={link}><button className='py-2 mr-10 px-5 -mt-1 bg-black rounded-full hover:bg-opacity-70'>Code 🚀</button></a>
              <a href={code}><button className='py-2 px-3 -mt-1 bg-black rounded-2xl hover:bg-opacity-70'>Live Demo 🔗</button></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards