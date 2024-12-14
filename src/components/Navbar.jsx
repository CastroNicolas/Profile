import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black px-6 md:px-10 lg:px-20 py-4 top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">

                <div className="text-2xl font-bold tracking-wide uppercase">
                    <a href="#home" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">NC</a>
                </div>

                {/* Menú principal para pantallas grandes */}
                <div className="hidden md:flex space-x-6 lg:space-x-8 items-center text-gray-500">
                    <a href="#home" className="px-4 py-2 rounded-md hover:bg-gradient-to-r from-gray-400 to-gray-600  hover:text-white transition-all duration-300">Home</a>
                    <a href="#about" className="px-4 py-2 rounded-md hover:bg-gradient-to-r from-gray-400 to-gray-600  hover:text-white transition-all duration-300">About Me</a>
                    <a href="#technologies" className="px-4 py-2 rounded-md hover:bg-gradient-to-r from-gray-400 to-gray-600  hover:text-white transition-all duration-300">Technologies</a>
                    <a href="#service" className="px-4 py-2 rounded-md hover:bg-gradient-to-r from-gray-400 to-gray-600  hover:text-white transition-all duration-300">Experience</a>
                    <a href="#projects" className="px-4 py-2 rounded-md hover:bg-gradient-to-r from-gray-400 to-gray-600  hover:text-white transition-all duration-300">Projects</a>
                </div>

                {/* Botón "Connect Me" */}
                <a
                    href="#contact"
                    className="hidden md:inline-block bg-gradient-to-r from-gray-400 to-gray-600 text-white px-6 py-2 rounded-full text-lg font-medium shadow-lg transform transition-transform hover:scale-105"
                >
                    Connect Me
                </a>
                {/* Botón de menú hamburguesa */}
                <div className="md:hidden text-gray-300">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        className="focus:outline-none"
                    >
                        <FaBars size={24} />
                    </button>
                </div>
            </div>


            {/* Menú hamburguesa */}
            {
                isOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 text-white space-y-8 text-center py-16 z-50 text-gray-300">
                        <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
                            <FaTimes size={24} />
                        </button>
                        <a href="#home" onClick={toggleMenu} className="block text-lg px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-300 ">Home</a>
                        <a href="#about" onClick={toggleMenu} className="block text-lg px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-300">About Me</a>
                        <a href="#technologies" onClick={toggleMenu} className="block text-lg px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-300">Technologies</a>
                        <a href="#service" onClick={toggleMenu} className="block text-lg px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-300">Experience</a>
                        <a href="#projects" onClick={toggleMenu} className="block text-lg px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-300">Projects</a>
                        <a href="#contact" onClick={toggleMenu} className="block text-lg px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-300">Contact</a>
                    </div>
                )
            }
        </nav >
    );
};
