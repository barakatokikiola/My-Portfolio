import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";


const Footer=()=>{

    return(
        <div className="flex flex-row justify-evenly px-5 py-20 text-[#8b250b] font-semibold">
            <div className="">
                <p>&copy; BARAKAT TAJUDEEN 2024</p>
            </div>
            <div className="inline-flex justify-between space-x-6 socials">
                <a href="https://www.x.com/barakatokikiola" target="_blank" rel="noreferrer"><FaTwitter className="text-xl" /></a>
                <a href="https://www.github.com/barakatokikiola" target="_blank" rel="noreferrer"><FaGithub className="text-xl" /></a>
                <a href="https://www.linkedin.com/in/barakatokikiola" target="_blank" rel="noreferrer"><FaLinkedin className="text-xl" /></a>
            </div>

        </div>
    )
}

export default Footer;