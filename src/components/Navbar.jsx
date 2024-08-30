import React from "react";
import logo from '../assets/Barakat Okikiola.svg';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
// import { CiDark, CiLight } from "react-icons/ci";


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
            <label className=" swap swap-rotate">
                <input type="checkbox" />
                <CiMenuFries  className=" swap-off fill-current text-4xl"/>
                <IoMdClose  className=" swap-on fill-current text-4xl"/>
            </label>
        </div>
    )
}
export default Navbar;
