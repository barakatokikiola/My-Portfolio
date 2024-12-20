import React from "react";

const WorkCard = (props) => {
  return (
    <div className="flex flex-col md:flex-row text-start mb-6 py-5 space-x-4 shadow-lg rounded-lg w-[80%]">
      <div className="w-full">
        <img src={props.img} alt={props.title} className="w-full" />
      </div>
      <div className="flex flex-col md:text-md text-sm my-auto">
        <div className="px-2">
          <div className="font-semibold py-2 text-pink-600">
            <h2>{props.title}</h2>
          </div>
          <div className="technologies flex space-x-2 py-2">
            {props.tech.map((icon, index) => (
              <img key={index} src={icon} alt="tech-icon" className="w-8 h-8" />
            ))}
          </div>
          <div className="description text-sm">{props.description}</div>
          <div className="flex flex-col md:flex-row justify-around py-4 md:space-y-0 space-y-4 text-center">
            <div className="items">
              <a href={props.live}>
                <button className="bg-transparent px-8 py-2 border-pink-600 border-[1px] text-pink-600 hover:shadow-[inset_13rem_0_0_0] hover:shadow-purple-950 hover:text-[#fff] duration-[900ms,1000ms] transition-[color,box-shadow]">
                  Live Demo
                </button>
              </a>
            </div>
            <div className="items">
              <a href={props.github}>
                <button className="bg-transparent px-8 py-2 border-pink-600 border-[1px] text-pink-600 hover:shadow-[inset_13rem_0_0_0] hover:shadow-purple-950 hover:text-[#fff] duration-[900ms,1000ms] transition-[color,box-shadow]">
                  View on GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
