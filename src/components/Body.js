import React from 'react'
import { HAND, PROFILE } from '../utils/constant'
import TechStack from './TechStack'

const Body = () => {
  return (
    <div className='h-screen'>
        <div className='flex justify-center mt-32 mr-5'>
            <div className='p-20 '>
                <div className='flex text-3xl font-serif mb-4'><h1>Hola,</h1><img className='w-10 mx-4 -mt-2 ' alt='hand' src={HAND}/></div>
                <p className='w-96 font-bold font-mono text-sm'>From coding in Java to scoring goals on the field, my journey intertwines technology prowess with a passion for football. Explore both in this portfolio.</p>
            </div>
            <div className='profile mt-6'>
                <img className='' alt='profile' src={PROFILE}/>
            </div>
        </div>
        
        <TechStack/>
    </div>
  )
}

export default Body