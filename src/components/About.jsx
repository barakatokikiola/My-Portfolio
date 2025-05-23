import React from 'react'
import about from '../assets/tools.png';
import Background from './Background';

const About = () => {
  return (
    <div className='flex flex-col md:flex-row px-8 md:px-20 md:text-md text-sm py-4 font-light mt-8 h-full' data-aos='fade-up' data-aos-duration='1500'>
     
       <div className='w-full text-justify space-y-6 md:px-6 my-auto'>
        <h1 className='font-bold w-full md:text-4xl text-start text-purple-800'>What I do,</h1>
       <p className='md:text-base'>
 I specialize in developing frontend solutions ranging from dynamic websites to robust web applications, with a focus on creating responsive, intuitive, and accessible user experiences.
        </p>
        <p className='md:text-base'>
        Currently, I am seeking opportunities to grow as a frontend developer, aiming to transition into a fullstack role. My expertise includes React, JavaScript, HTML, CSS, and Python.
        </p>
        <p className='md:text-base'>
        In previous projects, I have built and maintained React applications, improving their performance and usability. I collaborated with teams to design seamless user interfaces and integrate APIs effectively.

I am passionate about crafting clean, efficient code and building web applications that deliver exceptional user experiences.
        </p>
       </div>
       <div className="flex p-0 md:p-8 h-full w-full place-items-center ml-[-2rem] md:ml-0">
        <img src={about} alt='about' loading='lazy' className='bounce'/>
       </div>
       <Background />
    </div>
  )
}

export default About