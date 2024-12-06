import React from 'react';
import "../App.css"
import { Github, Instagram, LinkedIn } from '../utils/constant';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 dark:text-white py-6 h-[250px] bgcolor text-black dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[30px]">
        <br/>
        <p className="text-sm sm:text-base mb-4">
          Connect with me:
        </p>
        <br></br>
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a
              href="https://github.com/rahulrk85"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <img alt='instagram' className='w-10 hover:opacity-80 dark:bg-white rounded-full' src={Github}/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rahul-kulkarni-9229a6293/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <img alt='instagram' className='w-11 hover:opacity-80 dark:bg-white rounded-3xl' src={LinkedIn}/>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rahulkulkarni_85/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <img alt='instagram' className='w-11 hover:opacity-80 dark:bg-white rounded-3xl' src={Instagram}/>
            </a>
          </li>
        </ul>
        <p className="text-xs sm:text-sm mt-4">&copy; {currentYear} Rahul. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
