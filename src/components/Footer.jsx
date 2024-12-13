import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const Footer=()=>{

    return(
        <div className="flex md:flex-row flex-col-reverse justify-evenly px-5 py-20 text-charcoal font-semibold">
            <div className="text-center my-4">
                <p>&copy; BARAKAT TAJUDEEN 2024</p>
            </div>
            <div className="inline-flex justify-evenly socials">
                <a href="https://www.x.com/barakatokikiola" target="_blank" rel="noreferrer"><FaXTwitter className="text-4xl" /></a>
                <a href="https://www.github.com/barakatokikiola" target="_blank" rel="noreferrer"><FaGithub className="text-4xl" /></a>
                <a href="https://www.linkedin.com/in/barakatokikiola" target="_blank" rel="noreferrer"><FaLinkedin className="text-4xl" /></a>
            </div>

        </div>
    )
}

export default Footer;