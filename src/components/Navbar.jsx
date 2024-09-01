import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24 xl:px-48 py-4 relative z-50">
            <div className="container flex justify-between items-center mx-auto">
                <div className="font-bold text-xl md:text-2xl lg:text-3xl">Nicolas Castro</div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FaBars size={24} />
                    </button>
                </div>

                <div className={`md:flex md:items-center md:space-x-6 lg:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent text-center md:text-left`}>
                    <a href="#home" className="hover:text-gray-400 block py-2 md:py-0">Home</a>
                    <a href="#about" className="hover:text-gray-400 block py-2 md:py-0">About Me</a>
                    <a href="#technologies" className="hover:text-gray-400 block py-2 md:py-0">Technologies</a>
                    <a href="#service" className="hover:text-gray-400 block py-2 md:py-0">Experience</a>
                    <a href="#projects" className="hover:text-gray-400 block py-2 md:py-0">Projects</a>
                    <a href="#contact" className="hover:text-gray-400 block py-2 md:py-0">Contact</a>
                </div>

                <a href='#contact' className="hidden md:inline-block bg-gradient-to-r from-gray-400 to-gray-600 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                    Connect Me
                </a>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white space-y-4 text-center py-24 z-50">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
                        <FaTimes size={24} />
                    </button>

                    <a href="#home" onClick={toggleMenu} className="block hover:text-gray-400">Home</a>
                    <a href="#about" onClick={toggleMenu} className="block hover:text-gray-400">About Me</a>
                    <a href="#technologies" onClick={toggleMenu} className="block hover:text-gray-400">Technologies</a>
                    <a href="#service" onClick={toggleMenu} className="block hover:text-gray-400">Experience</a>
                    <a href="#projects" onClick={toggleMenu} className="block hover:text-gray-400">Projects</a>
                    <a href="#contact" onClick={toggleMenu} className="block hover:text-gray-400">Contact</a>
                </div>
            )}
        </nav>
    );
};
