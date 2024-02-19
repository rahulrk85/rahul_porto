import React from 'react'
import TechStack from './TechStack'
import Inrto from './Inrto'
import Projects from './Projects'
import Profile from './Profile'

const Body = () => {
  return (
    <div className='relative dark:text-white dark:bg-black pt-36 md:pt-0'>
      <div className='h-screen w-screen md:w-auto'>
        <div className='md:flex justify-center pt-6 md:pt-32 mr-5'>
          <Inrto/>
          <Profile/>
          </div> 
          <TechStack/>
        </div>
      <div className='flex justify-center'>
        <Projects/>
      </div>




    </div>
  )
}

export default Body