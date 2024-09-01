import { AiFillSlackCircle, AiOutlineWhatsApp } from "react-icons/ai";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.3 });

    return (
        <footer className="bg-black text-white text-center py-16 px-4 sm:px-8 lg:px-16">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <motion.div
                    className="flex flex-col md:flex-row md:space-x-12 items-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                    ref={ref}
                >
                    <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Nicolás Castro</h3>
                        <p className="text-gray-400">
                            Full-Stack Developer based in Spain, specializing in web and
                            software development.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex space-x-4 my-4 md:my-0">
                        <a href="https://wa.me/+34682044125" className="text-gray-400 hover:text-white transition-colors">
                            <AiOutlineWhatsApp size={24} />
                        </a>
                        <a href="mailto:maximonicolascastro@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <FaEnvelope size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/maximonicolascastrorodriguez/" className="text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/CastroNicolas" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://soyhenry.slack.com/team/U068CMRV59C" className="text-gray-400 hover:text-white transition-colors">
                            <AiFillSlackCircle size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
