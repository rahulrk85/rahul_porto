import React from 'react'
import {PROFILE } from '../utils/constant'
import TechStack from './TechStack'
import Inrto from './Inrto'
import Projects from './Projects'

const Body = () => {
  return (
    <div className='relative dark:text-white dark:bg-black'>
      <div className='h-screen'>
        <div className='flex justify-center pt-60 md:pt-32 mr-5'>
          <Inrto/>
          <div className='profile mt-6'>
            <img className='' alt='profile' src={PROFILE}/>
          </div>
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