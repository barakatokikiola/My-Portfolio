import React from "react";
import barakat from '../assets/Component 2.svg';
import Background from "./Background";



const Hero =() => {

    return(
        <div className="flex flex-col md:flex-row pb-5">
            
          
            <div className="p-10 md:p-20 z-10 w-full md:w-[60%] text-[#000]">
            
                <div className="md:text-start text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-londrina-outline">FRONTEND</h1>
                <h1 className="text-4xl md:text-6xl font-londrina-outline ">DEVELOPER.</h1>
                </div>
                <p className="my-5 w-full text-justify p-6">Hi, I'm Barakat, a passionate Frontend Developer with a knack for turning ideas into interactive, 
                    user-friendly web experiences. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Next.js,
                     I craft responsive, intuitive, and visually appealing websites. Explore my work, 
                     and let's build something amazing together!</p>
                     
            </div>
            <div className="p-10  w-full mx-auto justify-center md:w-[40%] bg-saffron/25 md:relative">
            <Background/>
                <img src={barakat} alt='' className="md:absolute md:-left-24 z-20 my-auto"  />
            </div>
           
        </div>
    )
}

export default Hero;