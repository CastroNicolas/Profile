import { AiFillSlackCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import ProfilePicture from '../assets/ProfilePicture.jpeg';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import NicolasCastro from '../assets/NicolasCastro.pdf';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ToMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.5 }); // Se activa al 50% de visibilidad

    return (
        <div
            className='bg-black text-white text-center py-16 px-4 sm:px-8 lg:px-16'
            id='home'
            ref={ref} // Ref en el contenedor para detectar cuando está en vista
        >
            <motion.img
                src={ProfilePicture}
                alt='ProfilePicture'
                className='mx-auto mb-8 w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
            />
            <motion.h1
                className='text-3xl sm:text-4xl font-bold'
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
            >
                Hi, I'm{" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    Nicolas Castro
                </span>
                , a Full-Stack Developer
            </motion.h1>
            <motion.p
                className='mt-4 text-base sm:text-lg text-gray-300'
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
            >
                I specialize in building modern and responsive web applications
            </motion.p>
            <div className='pt-4 mt-8 flex justify-center'>
                <motion.div
                    className='flex flex-wrap justify-center space-x-4'
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <a href="https://wa.me/+34682044125" className="text-gray-400 hover:text-white">
                        <AiOutlineWhatsApp size={24} />
                    </a>
                    <a href="mailto:maximonicolascastro@gmail.com" className="text-gray-400 hover:text-white">
                        <FaEnvelope size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/maximonicolascastrorodriguez/" className="text-gray-400 hover:text-white">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/CastroNicolas" className="text-gray-400 hover:text-white">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://soyhenry.slack.com/team/U068CMRV59C" className="text-gray-400 hover:text-white">
                        <AiFillSlackCircle size={24} />
                    </a>
                </motion.div>
            </div>
            <motion.div
                className='mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center'
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <a href='#contact' className="bg-gradient-to-r from-gray-400 to-gray-600 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full">
                    Contact Me
                </a>
                <a href={NicolasCastro} className="bg-gradient-to-r from-gray-400 to-gray-600 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full">
                    Resumé
                </a>
            </motion.div>
        </div>
    );
};
