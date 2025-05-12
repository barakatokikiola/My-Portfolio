import React from 'react';
import { GoLocation } from 'react-icons/go';
import { MdMail, MdPhone } from 'react-icons/md';
import Background from './Background';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center mx-auto font-cormorant' data-aos='fade-up' data-aos-duration='1500'>
      <div className="flex flex-col space-y-6 py-6 mx-auto justify-center  text-center">
    <h1 className='font-bold text-3xl text-purple-800'>Get In Touch</h1>
    <p className='w-[50%] mx-auto font-normal text-base md:text-md'>Lets turn ideas into reality! Whether you're ready to collaborate, brainstorm, or just want to chat, I’d love to hear from you. Drop me a message, and let’s get the ball rolling!</p>
      </div>
      <div className="w-4/5 h-full flex flex-col md:flex-row shadow-xl rounded-xl self-center">
      
      <div className="md:w-[40%] w-full h-full p-8 skew-x-6 bg-purple-900 rounded-xl shadow-burnt-sienna flex flex-col text-[#fff] md:text-md text-sm space-y-8">
      <div className='w-full inline-flex space-x-3'>
      <MdMail className='my-auto' />
      <p>barakattajudeen2018@gmail.com</p>
      </div>
      <div className='w-full inline-flex space-x-3'>
      <GoLocation className='my-auto' />
      <p>Lagos, Nigeria</p>
      </div>
      <div className='w-full inline-flex space-x-3'>
      <MdPhone className='my-auto' />
      <p>09033760570</p>
      </div>
      <p></p>
      </div>

      <div className="md:w-[60%] w-full p-8 z-50">
        <ContactForm />
      </div>
      </div>
      <Background/>
      </div>

		
  )
}

export default Contact;