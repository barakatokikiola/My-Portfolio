import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "./Contact";


const Home=()=>{

    return(
        <div className="">
           <Navbar />
           <div className="md:px-12">
           <Hero />
           <Portfolio />
           <Contact />
           <Footer />
           </div>
        </div>
    )
}
export default Home;
