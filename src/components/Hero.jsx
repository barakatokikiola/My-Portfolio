import React from "react";
import barakat from '../assets/Hero.png';
import Background from "./Background";
import angular_  from '../assets/angular.png';
import react_ from '../icons/reactjs.svg';
import next_ from '../icons/nextjs.svg';



const Hero =() => {

    return(
        <div id='hero-section' className="flex flex-col  md:pt-24 md:flex-row justify-between z-10 place-items-center gap-y-8">
            
          
            <div className="md:p-16 w-full text-[#000] md:pl-[7rem] p-4">
            
                <div className="md:text-start text-center">
                <h1 className="text-4xl md:text-[5.5rem]/[6rem] font-bold font-cormorant bg-gradient-to-r from-pink-800 to-violet-800 bg-clip-text text-transparent">Frontend</h1>
                <h1 className="text-4xl md:text-[5.5rem]/[6rem] font-cormorant bg-gradient-to-r from-violet-800 to-pink-900 bg-clip-text text-transparent">Developer.</h1>
                </div>
                <p className="my-4 w-full text-lg/9 text-justify md:pr-[9rem] md:px-0 px-4">Hi, I'm Barakat, a passionate Frontend Developer with a knack for turning ideas into interactive, 
                    user-friendly web experiences. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like <span className="font-bold text-purple-900">React</span> and <span className="font-bold text-pink-600">Next.js</span>,
                     I craft responsive, intuitive, and visually appealing websites. Explore my work, 
                     and let's build something amazing together!</p>
                     <div className="skills flex gap-x-4 mt-[3.5rem]">
                        <div>
                            <img src={angular_} alt="angular"/>
                        </div>
                       
                        <div>
                            <img src={react_} alt="react"/>
                        </div>
                         <div>
                            <img src={next_} alt="next"/>
                         </div>
                     </div>
                     
            </div>
            <div className="px-8 w-full mx-auto justify-center place-content-center bg-purple-900/15">
            <Background/>
                <img src={barakat} alt='' className="md:ml-[-8rem]"  />
            {/* <picture>
            <source srcset="/images/hero.webp" type="image/webp"></source>
            <img src={barakat} alt="Hero" />
            </picture> */}
            </div>
           
        </div>
    )
}

export default Hero;