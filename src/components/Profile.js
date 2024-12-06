import React from 'react'
import { PROFILE } from '../utils/constant'

const Profile = () => {
  return (
    <div className='profile mt-6 absolute md:relative md:ml-0' >
            <img className='' alt='profile' src={PROFILE}/>
    </div>
  )
}

export default Profile