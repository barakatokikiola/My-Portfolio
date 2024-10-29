import React from "react";
import logo from '../assets/barakat.png';
import { CiMenuFries } from "react-icons/ci";




const Navbar=()=>{

    return(
        <div className="flex p-5 bg-inherit justify-between">
            <div className="">
                <img src={logo} alt='barakat' />
            </div>
            {/* <label className="btn btn-circle swap swap-rotate">
                <input type="checkbox" className="theme-controller" value="synthwave" />
                <CiLight className=" swap-off fill-current text-4xl"/>
                <CiDark  className=" swap-on fill-current text-4xl"/>
            </label> */}

<details className="dropdown dropdown-end">
        <summary tabIndex={0} role="button" className="btn bg-transparent border-none hover:bg-sandy-brown rounded-btn">
        
                <CiMenuFries  className="text-4xl"/>
            
            </summary>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
          <li><a href="https://www.x.com/barakatokikiola" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://www.github.com/barakatokikiola" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/barakatokikiola" target="_blank" rel="noreferrer">Linkedin</a></li>
            
        </ul>
      </details>

        </div>
    )
}
export default Navbar;
