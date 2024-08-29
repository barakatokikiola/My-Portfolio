import React from 'react';


const WorkCard =(props)=> {

    return(
        <>
        <div className='outline outline-1 outline-[#c5c5c5] card-compact rounded-lg'>
            <div className='card-img w-full'>
            <img src={props.img} alt='' className='w-full h-64' />
            </div>
            <div className='card-details px-2'>
            <div className='card-title font-semibold text-sm py-2'>
                <h2>{props.title}</h2>
                </div>
            <div className='flex flex-row justify-around py-2 text-center'>
            <div className='items'>
               <a href={props.live}>
               <button className='btn block px-[1.5rem] bg-thistle'>Live</button>
               </a>
            </div>
            <div className='items'>
            <a href={props.github}>
               <button className='btn block px-[1.5rem] bg-cotton-candy'>GitHub</button>
               </a>
               </div>
        </div>
            </div>
        </div>
        </>
    )
}

export default WorkCard;