import React from "react";
import barakat from '../assets/Component 2.svg';



const Hero =() => {

    return(
        <div className="flex flex-col lg:flex-row">
          
            <div className="p-10 lg:p-20 bg-burnt-sienna text-lumber w-full lg:w-2/3">
                <h1 className="text-6xl font-bold"><span className="text-white">Front</span>End</h1>
                <h1 className="text-6xl font-bold text-saffron">Developer.</h1>
                <p className="my-5 lg:w-1/2 w-full text-justify text-off-white">Hi, I'm Barakat, a passionate Frontend Developer with a knack for turning ideas into interactive, 
                    user-friendly web experiences. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Next.js,
                     I craft responsive, intuitive, and visually appealing websites. Explore my work, 
                     and let's build something amazing together!</p>
                     
            </div>
            <div className="p-10 lg:p-10 w-full mx-auto justify-center lg:w-1/3 bg-saffron lg:relative">
                <img src={barakat} alt='' className="lg:absolute lg:-left-24"  />
            </div>
        </div>
    )
}

export default Hero;