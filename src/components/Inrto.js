import React from 'react'
import { Github, HAND, LinkedIn, git_profile, linkedIn_profile } from '../utils/constant'

const Inrto = () => {
  return (
    <div className='p-20 '>
                <div className='flex text-3xl font-serif mb-4'><h1>Hola,</h1><img className='w-10 mx-4 -mt-2 ' alt='hand' src={HAND}/></div>
                <p className='w-96 font-bold font-mono text-sm mb-4'>From coding in Java to scoring goals on the field, my journey intertwines technology prowess with a passion for football. Explore both in this portfolio.</p>
                <div className='flex'>
                <a href={git_profile}><img className='w-9 mx-3' alt='' src={Github}/></a>
                <a href={linkedIn_profile}><img className='w-9 mx-3' alt='' src={LinkedIn}/></a>
                </div>
    </div>
  )
}

export default Inrto