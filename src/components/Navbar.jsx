import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24 relative z-50">
            <div className="container py-2 flex justify-between items-center">
                {/* Nombre para pantallas grandes */}
                <div className="font-bold hidden md:inline">Nicolas Castro</div>

                {/* Menú en pantallas pequeñas */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FaBars size={24} />
                    </button>
                </div>

                {/* Enlaces de navegación */}
                <div className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} space-y-4 md:space-y-0 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent text-center md:text-left`}>
                    <a href="#home" className="hover:text-gray-400 block py-2 md:py-0">Home</a>
                    <a href="#about" className="hover:text-gray-400 block py-2 md:py-0">About Me</a>
                    <a href="#technologies" className="hover:text-gray-400 block py-2 md:py-0">Technologies</a>
                    <a href="#service" className="hover:text-gray-400 block py-2 md:py-0">Experience</a>
                    <a href="#projects" className="hover:text-gray-400 block py-2 md:py-0">Projects</a>
                    <a href="#contact" className="hover:text-gray-400 block py-2 md:py-0">Contact</a>
                </div>

                {/* Botón para pantallas grandes */}
                <a href='#contact' className="bg-gradient-to-r from-gray-400 to-gray-600 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                    Connect Me
                </a>
            </div>

            {/* Menú desplegable en dispositivos móviles */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white space-y-4 text-center py-24 z-50">
                    {/* Botón de cerrar menú */}
                    <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
                        <FaTimes size={24} />
                    </button>

                    {/* Enlaces del menú */}
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
