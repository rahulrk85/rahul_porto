import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-4 m-4 font-bold '>
        <h2>Rahul Kulkarni</h2>
        <ul className='flex'>
            <li className='px-4'>Home</li>
            <li className='px-4'>About</li>
            <li className='px-4'>Contact</li>
        </ul>
    </div>
  )
}

export default Header