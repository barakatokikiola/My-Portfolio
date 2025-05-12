import React, { useEffect, useState } from "react";
import logo from '../assets/Group 3.svg';
import logo1 from '../assets/Group 2.svg';
import { CiMenuFries } from "react-icons/ci";




const Navbar=()=>{

    const [isHero, setIsHero] = useState(true);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsHero(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
  
      const target = document.getElementById('hero-section');
      if (target) observer.observe(target);
  
      return () => {
        if (target) observer.unobserve(target);
      };
    }, []);
    return(
        <div className="md:fixed top-0 z-50 flex px-4 md:px-16 py-4 bg-white justify-between w-screen">
            <div className="z-50 my-auto">
                <a href="/">
                <img src={isHero ? `${logo1}` : `${logo}`} alt='logo' className={isHero ? 'w-8':'w-24'} loading="lazy"  />
                </a>
            </div>
       <nav className="hidden md:flex">
          <ul
          tabIndex={0}
          className="flex space-x-9">
          <li><a href="https://www.x.com/barakatokikiola" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://www.github.com/barakatokikiola" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/barakatokikiola" target="_blank" rel="noreferrer">Linkedin</a></li>
            
        </ul>
       </nav>
<details className="z-50 dropdown dropdown-end cursor-pointer md:hidden">
        <summary tabIndex={0} role="button" className="btn bg-transparent border-none hover:bg-persian-green/10 rounded-btn">
        
                <CiMenuFries  className="md:text-4xl text-3xl"/>
            
            </summary>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 z-[1] mt-4 w-52 p-2 shadow">
          <li><a href="https://www.x.com/barakatokikiola" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://www.github.com/barakatokikiola" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/barakatokikiola" target="_blank" rel="noreferrer">Linkedin</a></li>
            
        </ul>
      </details>

        </div>
    )
}
export default Navbar;
