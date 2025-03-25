import { AiFillSlackCircle, AiOutlineWhatsApp } from "react-icons/ai";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SideBar } from "../sidebar/SideBar"
import "./Navbar.scss"

export const Navbar = () => {
    return (
        <div className="navbar">
            <SideBar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Nico Dev</motion.span>
                <div className="social">
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+34682044125" className="text-gray-400 hover:text-white transition-colors">
                        <AiOutlineWhatsApp />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:maximonicolascastro@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <FaEnvelope />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maximonicolascastrorodriguez/" className="text-gray-400 hover:text-white transition-colors">
                        <FaLinkedin />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/CastroNicolas" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://soyhenry.slack.com/team/U068CMRV59C" className="text-gray-400 hover:text-white transition-colors">
                        <AiFillSlackCircle />
                    </a>
                </div>
            </div>
        </div>
    )
}
