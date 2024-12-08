import React from 'react'
import TechStack from './TechStack'
import Inrto from './Inrto'
import Projects from './Projects'
import Profile from './Profile'
import Footer from './Footer'

const Body = () => {
  // document.documentElement.classList.add("dark");
  const root = document.getElementById("root")
  root.classList.add("dark")
  return (
    <div className='relative dark:text-white dark:bg-black pt-36 md:pt-0   w-auto'>
      <div className='h-full w-full md:w-auto'>
        <div className='flex justify-center pt-6 md:pt-32 mr-5'>
          <Inrto/>
          <Profile/>
        </div> 
        <div className='flex md:inline'>
          <TechStack/>
        </div>
      </div>
      <div className='flex justify-center'>
        <Projects/>
      </div>
      <Footer/>
    </div>
  )
}

export default Body