import { AiFillSlackCircle, AiOutlineWhatsApp } from "react-icons/ai"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
                    <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Nicolás Castro</h3>
                        <p className="text-gray-400">
                            Full-Stack Developer based in the Spain, specializing in web and
                            software development.
                        </p>
                    </div>
                </div>
                <div
                    className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
            justify-center"
                >
                    <div className="flex space-x-4 my-4 md:my-0">
                        <a href="https://wa.me/+34682044125" className="text-gray-400 hover:text-white">
                            <AiOutlineWhatsApp />
                        </a>
                        <a href="mailto:maximonicolascastro@gmail.com" className="text-gray-400 hover:text-white">
                            <FaEnvelope />
                        </a>
                        <a href="https://www.linkedin.com/in/maximonicolascastrorodriguez/" className="text-gray-400 hover:text-white">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/CastroNicolas" className="text-gray-400 hover:text-white">
                            <FaGithub />
                        </a>
                        <a href="https://soyhenry.slack.com/team/U068CMRV59C" className="text-gray-400 hover:text-white">
                            <AiFillSlackCircle />
                        </a>
                    </div>

                </div>
            </div>
        </footer >
    )
}
