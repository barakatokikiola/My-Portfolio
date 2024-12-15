import React from "react";
import WorkCard from "./WorkCard";
import creative from '../assets/creativeportfolio.png'
import krawd from '../assets/krawd.png';
import credo from '../assets/credo.png';
import movie from '../assets/movvieapp.png';
import todo from '../assets/laptop.png';


const Portfolio=()=>{
    const cardList =[
        {
            img: creative,
            title: 'Creative Nextjs Portfolio',
            live: 'https://nextjs-portfolio-pink-pi.vercel.app/',
            github: 'https://github.com/barakatokikiola/Nextjs-Portfolio',
            tech: 'React, TailwindCSS, Nextjs, Three.js',
            description: 'This experimental project is built using React, TailwindCSS, and DaisyUI, It is responsive and best viewed on al devices'
        
        },
        {
            img: todo,
            title: 'Nextjs Todo App',
            live: 'https://nextjs-todo-e32142e33-barakatokikiolas-projects.vercel.app/',
            github: 'https://github.com/barakatokikiola/Nextjs-Todo-App',
            tech: 'React, TailwindCSS, Nextjs',
            description: 'This experimental project is built using React, TailwindCSS, and DaisyUI, It is responsive and best viewed on al devices'
        
        },
        {
            img: krawd,
            title: 'Krawdwise',
            live: 'https://krawdwise.netlify.app/',
            github: 'https://github.com/barakatokikiola/Krawdwise',
            tech: 'React, TailwindCSS',
            description: 'This experimental project is built using React, TailwindCSS, and DaisyUI, It is responsive and best viewed on al devices'
        },
        {
            img: movie,
            title: 'Movie Search App',
            live: 'https://barakatokikiola.github.io/Movie-App/',
            github: 'https://github.com/barakatokikiola/Movie-App',
            tech: 'React, TailwindCSS',
            description: 'This experimental project is built using React, TailwindCSS, and DaisyUI, It is responsive and best viewed on al devices'
        },
        {
            img: credo,
            title: 'Credo Landing Page',
            live: 'https://teamconnect.netlify.app/',
            github: 'https://github.com/barakatokikiola/Credo-Connect',
            tech: 'React, TailwindCSS',
            description: 'This experimental project is built using React, TailwindCSS, and DaisyUI, It is responsive and best viewed on al devices'
        },
       
     ]
    return(
        <div className="scroll-smooth md:pt-16" data-aos="fade-down" data-aos-duration="1000">
            
            <div className="flex text-pastel-violet justify-center mx-auto pt-5 mt-4 md:mt-12">
                <h1 className="text-4xl font-bold">My Works</h1>
            </div>
            <div className='z-10 flex flex-row flex-wrap p-3 justify-center items-center gap-8 mx-auto md:my-5'>
            
        {cardList.map((card) => {
            return (
                <WorkCard 
                img = {card.img}
                title = {card.title}
                live = {card.live}
                github = {card.github}
                tech={card.tech}
                description={card.description}
                />
            )
        })}
        
        </div>
     
        </div>
    )
}

export default Portfolio;