import React from 'react';
import { GoLocation } from 'react-icons/go';
import { MdMail, MdPhone } from 'react-icons/md';
import Background from './Background';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center mx-auto z-10 font-cormorant'>
      <div className="flex flex-col space-y-6 py-6 mx-auto justify-center  text-center">
    <h1 className='font-bold text-3xl'>Get In Touch</h1>
    <p className='w-[50%] mx-auto font-semibold text-md'>Lets turn ideas into reality! Whether you're ready to collaborate, brainstorm, or just want to chat, I’d love to hear from you. Drop me a message, and let’s get the ball rolling!</p>
      </div>
      <div className="w-4/5 h-full flex flex-col md:flex-row shadow-xl rounded-xl self-center">
      
      <div className="md:w-[35%] w-full h-full p-8 skew-x-6 bg-persian-green rounded-xl shadow-burnt-sienna flex flex-col text-[#fff] md:text-lg text-md space-y-8">
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

      <div className="md:w-[65%] w-full p-8">
<form class="flex flex-col w-full">  
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="mail" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Mail</label>
    </div>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="message" id="floating_message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
  </div>
  <button type="submit" className="text-white bg-persian-green/60 hover:bg-persian-green font-medium rounded-lg text-sm sm:w-auto  py-2.5 text-center">Submit Message</button>
</form>

      </div>
      </div>
      <Background/>
      </div>

		
  )
}

export default Contact;