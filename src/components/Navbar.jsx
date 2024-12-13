import React from "react";
import logo from '../assets/Group 1.png';
import { CiMenuFries } from "react-icons/ci";




const Navbar=()=>{

    return(
        <div className="flex p-5 bg-transparent justify-between w-full">
            <div className="z-50">
                <a href="/">
                <img src={logo} alt='logo' className="md:w-full w-[60%]" />
                </a>
            </div>

<details className="z-50 dropdown dropdown-end cursor-pointer">
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
