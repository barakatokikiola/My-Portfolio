import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const Footer=()=>{

    return(
        <div className="flex md:flex-row flex-col-reverse justify-evenly px-5 pb-6 pt-10 md:pt-20 text-purple-950 font-semibold">
            <div className="text-center my-auto">
                <p>&copy; BARAKAT TAJUDEEN 2024</p>
            </div>
            <div className="inline-flex justify-evenly socials md:space-x-4 py-6">
                <a href="https://www.x.com/barakatokikiola" target="_blank" rel="noreferrer"><FaXTwitter className="text-4xl" /></a>
                <a href="https://www.github.com/barakatokikiola" target="_blank" rel="noreferrer"><FaGithub className="text-4xl" /></a>
                <a href="https://www.linkedin.com/in/barakatokikiola" target="_blank" rel="noreferrer"><FaLinkedin className="text-4xl" /></a>
            </div>

        </div>
    )
}

export default Footer;