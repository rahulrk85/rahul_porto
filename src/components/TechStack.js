import React from 'react'
import { CSS_LOGO, HTML, JAVA_LOGO, JS_LOGO, REACT_LOGO, REDUX_LOGO, TailWind_LOGO } from '../utils/constant'

const TechStack = () => {
  return (
    <div className='md:flex justify-center items-center font-black mt-[650px] md:mt-36 md:ml-7 w-auto md:w-auto flex-wrap'>
        <h1 className='mr-10 mt-1 mb-6 md:mb-0'>Tech Stack</h1>
        <div className='flex flex-wrap justify-center pt-4 md:mt-0'>
          <p className='text-2xl mr-4 hidden md:inline'>|</p>
          <img className='w-10 mx-4 mb-6 md:mb-0' alt='logo' src={HTML}/>
          <img className='w-10 mx-4 mb-6 md:mb-0' alt='logo' src={CSS_LOGO}/>
          <img className='w-10 mx-4 mb-6 md:mb-0' alt='logo' src={JS_LOGO}/>
          <img className='w-10 mx-4 mb-6 md:mb-0' alt='logo' src={REACT_LOGO}/>
          <img className='w-10 mx-4 mb-6 md:mb-0' alt='logo' src={REDUX_LOGO}/>
          <img className='w-10 mx-4 mb-6 md:mb-0' alt='logo' src={TailWind_LOGO}/>
          <img className='w-10 mx-4 mb-6 md:mb-0' alt='logo' src={JAVA_LOGO}/>
        </div>
    </div>
  )
}

export default TechStack