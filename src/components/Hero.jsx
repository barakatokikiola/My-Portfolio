import React from "react";
import barakat from '../assets/Component 2.svg';
import Background from "./Background";



const Hero =() => {

    return(
        <div id='hero-section' className="flex flex-col md:pt-24 md:flex-row z-10">
            
          
            <div className="p-4 md:p-16 w-full md:w-[60%] text-[#000]">
            
                <div className="md:text-start text-center text-purple-900">
                <h1 className="text-4xl md:text-6xl font-bold font-cormorant">FRONTEND</h1>
                <h1 className="text-4xl md:text-6xl font-cormorant">DEVELOPER.</h1>
                </div>
                <p className="my-4 w-full md:w-[70%] text-justify p-4">Hi, I'm Barakat, a passionate Frontend Developer with a knack for turning ideas into interactive, 
                    user-friendly web experiences. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like <span className="font-bold text-purple-900">React</span> and <span className="font-bold text-pink-600">Next.js</span>,
                     I craft responsive, intuitive, and visually appealing websites. Explore my work, 
                     and let's build something amazing together!</p>
                     
            </div>
            <div className="p-10  w-full mx-auto justify-center md:w-[40%] bg-purple-900/25 md:relative">
            <Background/>
                <img src={barakat} alt='' className="md:absolute md:-left-24 z-20 my-auto" loading="lazy"  />
            </div>
           
        </div>
    )
}

export default Hero;