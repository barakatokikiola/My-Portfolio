import React from 'react';


const WorkCard =(props)=> {

    return(
        <>
        <div className='outline outline-1 outline-[#c5c5c5] card-compact rounded-lg'>
            <div className='card-img w-full'>
            <img src={props.img} alt='' className='w-full h-64' />
            </div>
            <div className='card-details px-2 text-[#8b250b]'>
            <div className='card-title font-semibold text-sm py-2'>
                <h2>{props.title}</h2>
                </div>
            <div className='flex flex-row justify-around py-2 text-center'>
            <div className='items'>
               <a href={props.live}>
               <button className='btn text-burnt-sienna hover:text-off-white bg-transparent hover:bg-[#8b250b]
                block px-[1.5rem] rounded-none border-1 border-sandy-brown hover:translate-x-6'>Live</button>
               </a>
            </div>
            <div className='items'>
            <a href={props.github}>
               <button className='btn text-burnt-sienna hover:text-off-white bg-transparent hover:bg-[#8b250b]
                block px-[1.5rem] rounded-none border-1 border-burnt-sienna hover:translate-x-6'>GitHub</button>
               </a>
               </div>
        </div>
            </div>
        </div>
        </>
    )
}

export default WorkCard;