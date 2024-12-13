import React from 'react';


const WorkCard =(props)=> {

    return(
        <>
        
        <div className='outline outline-1 outline-[#c5c5c5] card-compact rounded-lg'>
            <div className='card-img w-full'>
            <img src={props.img} alt='' className='w-full h-64' />
            </div>
            <div className='card-details px-2 text-persian-green'>
            <div className='card-title font-semibold text-sm py-2'>
                <h2>{props.title}</h2>
                </div>
            <div className='flex flex-row justify-around py-2 text-center'>
            <div className='items'>
               <a href={props.live}>
               <button className='bg-transparent px-8 py-2 border-persian-green border-2
                text-persian-green 
                hover:shadow-[inset_8rem_0_0_0] hover:shadow-persian-green hover:text-[#fff]
                duration-[900ms,1000ms] transition-[color,box-shadow]'>Live</button>
               </a>
            </div>
            <div className='items'>
            <a href={props.github}>
         


    <button class="bg-transparent px-8 py-2 border-persian-green border-2 text-persian-green 
    
    hover:shadow-[inset_8rem_0_0_0] hover:shadow-persian-green hover:text-[#fff]
     duration-[900ms,1000ms] transition-[color,box-shadow]">
        GitHub
    </button>


               </a>
               </div>
        </div>
            </div>
        </div>
        </>
    )
}

export default WorkCard;