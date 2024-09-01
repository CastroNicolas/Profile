import AboutMePicture from '../assets/ProfilePicture.jpeg';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const AboutMe = () => {
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.8 }
                    });
                } else {
                    controls.start({
                        opacity: 0,
                        y: 20,
                        scale: 0.8,
                        transition: { duration: 0.8 }
                    });
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return (
        <div className="bg-black text-white text-center py-16 px-4 sm:px-8 lg:px-16" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    animate={controls}
                    initial={{ opacity: 0, y: 20 }}
                >
                    About Me
                </motion.h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <motion.img
                        src={AboutMePicture}
                        alt='AboutMePicture'
                        className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={controls}
                    />
                    <motion.div
                        className="flex-1"
                        ref={ref}
                        animate={controls}
                        initial={{ opacity: 0, x: -20 }}
                    >
                        <p className="text-lg mb-8">
                            I'm a Fullstack Developer with experience working in different projects with the following stack of technologies: Javascript, Typescript, React.js, Redux, Node.js, SQL, Express, and MongoDB. Additionally, I have hands-on experience with third-party authentications, utilizing platforms such as Firebase and Auth0, as well as implementing JWT (JSON Web Tokens). I consider myself a problem-solving, team player, and results-oriented person. I'm looking for new challenges in the Industry where I can bring value to the team and to the company in order to achieve the company's objectives.
                        </p>
                        <div className='mt-12 flex justify-between text-center'>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={controls}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    +1
                                </h3>
                                <p>Years of Experience</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={controls}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    +10
                                </h3>
                                <p>Projects Completed</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={controls}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    B2
                                </h3>
                                <p>English Level</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
