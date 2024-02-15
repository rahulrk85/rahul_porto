import React from 'react'
import { CSS_LOGO, HTML, JS_LOGO, REACT_LOGO, REDUX_LOGO, TailWind_LOGO } from '../utils/constant'

const TechStack = () => {
  return (
    <div className='flex justify-center font-black mt-10'>
        <h1 className='mr-10 mt-1'>Tech Stack</h1>
        <p className='text-2xl mr-4'>|</p>
        <img className='w-10 mx-4' alt='logo' src={HTML}/>
        <img className='w-10 mx-4' alt='logo' src={CSS_LOGO}/>
        <img className='w-10 mx-4' alt='logo' src={REACT_LOGO}/>
        <img className='w-10 mx-4' alt='logo' src={JS_LOGO}/>
        <img className='w-10 mx-4' alt='logo' src={REDUX_LOGO}/>
        <img className='w-10 mx-4' alt='logo' src={TailWind_LOGO}/>

       
    </div>
  )
}

export default TechStack