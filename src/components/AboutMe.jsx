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
        <div className="text-white text-center py-20 px-4 sm:px-8 lg:px-16 sm:py-40">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12 flex-wrap">
                    <motion.img
                        src={AboutMePicture}
                        alt='AboutMePicture'
                        className="w-72 h-90 md:w-80 md:h-90 rounded-2xl object-cover mb-2 md:mb-0 max-w-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={controls}
                    />
                    <motion.div
                        className="flex-1 text-center"
                        ref={ref}
                        animate={controls}
                        initial={{ opacity: 0, x: -20 }}
                    >
                        <p className="text-lg mb-8">
                            I'm a Fullstack Developer with experience working in different projects with the following stack of technologies: Javascript, Typescript, React.js, Redux, Node.js, SQL, Express, and MongoDB. Additionally, I have hands-on experience with third-party authentications, utilizing platforms such as Firebase and Auth0, as well as implementing JWT (JSON Web Tokens). I consider myself a problem-solving, team player, and results-oriented person. I'm looking for new challenges in the Industry where I can bring value to the team and to the company in order to achieve the company's objectives.
                        </p>
                        <div className="mt-12 flex flex-wrap justify-center gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={controls}
                                transition={{ duration: 0.6 }}
                                className="text-center"
                            >
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                    3
                                </h3>
                                <p>Years of Experience</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={controls}
                                transition={{ duration: 0.6 }}
                                className="text-center"
                            >
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                    +10
                                </h3>
                                <p>Projects Completed</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={controls}
                                transition={{ duration: 0.6 }}
                                className="text-center"
                            >
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                    B1
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
