import React from "react";
import WorkCard from "./WorkCard";
import creative from "../assets/creative.png";
import krawd from "../assets/krawd.png";
import credo from "../assets/credo.png";
import movie from "../assets/movie.png";
import todo from "../assets/laptop.png";
import mssn from '../assets/mssn.png';
import bootstrap from "../icons/bootstrap5.svg";
import css3 from "../icons/css3.svg";
import html5 from "../icons/html5.svg";
import js from "../icons/js.svg";
import nextjs from "../icons/nextjs.svg";
import reactjs from "../icons/reactjs.svg";
import tailwindcss from "../icons/tailwindcss.svg";
import threejs from "../icons/threejs.svg";
import typescript from "../icons/typescript.svg";

const Portfolio = () => {
  const cardList = [
    {
      img: creative,
      title: "Creative Nextjs Portfolio",
      live: "https://nextjs-portfolio-pink-pi.vercel.app/",
      github: "https://github.com/barakatokikiola/Nextjs-Portfolio",
      tech: [html5, css3, js, typescript, tailwindcss, reactjs, nextjs, threejs],
      description:
        "This experimental project is built using React, TailwindCSS, and DaisyUI. It is responsive and best viewed on all devices.",
    },
    {
      img: todo,
      title: "Nextjs Todo App",
      live: "https://nextjs-todo-e32142e33-barakatokikiolas-projects.vercel.app/",
      github: "https://github.com/barakatokikiola/Nextjs-Todo-App",
      tech: [nextjs, reactjs, js, typescript,tailwindcss, html5,css3],
      description:
        "This experimental project is built using React, TailwindCSS, and DaisyUI. It is responsive and best viewed on all devices.",
    },
    {
      img: krawd,
      title: "Krawdwise",
      live: "https://krawdwise.netlify.app/",
      github: "https://github.com/barakatokikiola/Krawdwise",
      tech: [reactjs,tailwindcss,js,css3,html5],
      description:
        "This experimental project is built using React, TailwindCSS, and DaisyUI. It is responsive and best viewed on all devices.",
    },
    {
      img: movie,
      title: "Movie Search App",
      live: "https://barakatokikiola.github.io/Movie-App/",
      github: "https://github.com/barakatokikiola/Movie-App",
      tech: [reactjs,bootstrap,js,html5,css3],
      description:
        "This experimental project is built using React, TailwindCSS, and DaisyUI. It is responsive and best viewed on all devices.",
    },
    {
      img: credo,
      title: "Credo Landing Page",
      live: "https://teamconnect.netlify.app/",
      github: "https://github.com/barakatokikiola/Credo-Connect",
      tech: [tailwindcss,reactjs,js,html5,css3],
      description:
        "This experimental project is built using React, TailwindCSS, and DaisyUI. It is responsive and best viewed on all devices.",
    },
    {
        img: mssn,
        title: "MSSN Landing Page",
        live: "https://barakatokikiola.github.io/MSSN-Unilag/",
        github: "https://github.com/barakatokikiola/MSSN-Unilag",
        tech: [html5,css3,js, bootstrap],
        description:
          "This experimental project is built using React, TailwindCSS, and DaisyUI. It is responsive and best viewed on all devices.",
      },
  ];

  return (
    <div className="scroll-smooth md:pt-16" data-aos='fade-up' data-aos-duration='2000'>
      <div className="flex text-pastel-violet justify-center mx-auto pt-5 mt-4 md:mt-12">
        <h1 className="text-4xl font-bold">My Works</h1>
      </div>
      <div className="z-10 flex flex-row flex-wrap p-3 justify-center items-center gap-8 mx-auto md:my-5">
        {cardList.map((card, index) => (
          <WorkCard
            key={index}
            img={card.img}
            title={card.title}
            live={card.live}
            github={card.github}
            tech={card.tech}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
