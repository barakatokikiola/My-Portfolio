import React from "react";
import WorkCard from "./WorkCard";
import krawd from '../assets/krawd.png';
import credo from '../assets/credo.png';
import movie from '../assets/movvieapp.png';
import bmi from '../assets/bmi.png';
import clock from '../assets/clock.png';
import counter from '../assets/counter.png';

const Portfolio=()=>{
    const cardList =[
        {
            img: krawd,
            title: 'Krawdwise',
            live: 'https://krawdwise.netlify.app/',
            github: 'https://github.com/barakatokikiola/Krawdwise',
        },
        {
            img: movie,
            title: 'Movie Search App',
            live: 'https://barakatokikiola.github.io/Movie-App/',
            github: 'https://github.com/barakatokikiola/Movie-App',
        },
        {
            img: credo,
            title: 'Credo Landing Page',
            live: 'https://teamconnect.netlify.app/',
            github: 'https://github.com/barakatokikiola/Credo-Connect',
        },
        {
            img: bmi,
            title: 'BMI Calculator',
            live: 'https://reactbmicalc.netlify.app/',
            github: 'https://github.com/barakatokikiola/-React-BMI-Calculator',
        },
        {
            img: counter,
            title: 'Simple Counter App',
            live: 'https://barakatokikiola.github.io/JS-Counter-App/',
            github: 'https://github.com/barakatokikiola/JS-Counter-App',
        },
        {
            img: clock,
            title: 'CSS Analog Clock',
            live: 'https://barakatokikiola.github.io/clock',
            github: 'https://github.com/barakatokikiola/clock',
        },
     ]
    return(
        <div className="">
            <div className="flex text-pastel-violet justify-center mx-auto py-5">
                <h1 className="text-4xl font-bold">My Works</h1>
            </div>
            <div className='container px-10 grid md:grid-cols-3 justify-center items-center gap-8 mx-auto my-5'>
        {cardList.map((card) => {
            return (
                <WorkCard 
                img = {card.img}
                title = {card.title}
                live = {card.live}
                github = {card.github}
                />
            )
        })}
        </div>
        </div>
    )
}

export default Portfolio;