import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        id: 1,
        date: "Jan. 2023 - Dic. 2024",
        title: "Frontend Developer",
        description: "Maintenance, design, and construction of new functionalities. I developed an app using the technologies of React, Redux, and Bootstrap.",
        Maintechnologies: "JavaScript, React.js, Redux, Bootstrap"
    },
    {
        id: 2,
        date: "Feb. 2024 - May. 2024",
        title: "Full Stack Teacher Assistant at Henry Bootcamp",
        description: "Coordinating a group of students to achieve seamless integration into the study team. Assisting in the resolution of exercises, explaining topics not understood from the previous day, and promoting group programming (pair programming). Advocating for ideas to enhance Bootcamp processes.",
        Maintechnologies: "JavaScript, TypeScript, React.js, Node.js, SQL, MongoDB"
    },
];

// Variantes de animación para las tarjetas
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

// Variantes de animación para el contenedor
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const Service = () => {
    const ref = useRef();
    const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className="text-white text-center py-16 px-2 sm:px-6 lg:px-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="container mx-auto px-8 md:px-8 lg:px-15">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div
                                className="text-right text-2xl font-bold text-gray-100"
                            >
                                {service.date}
                            </div>
                            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-gray-300">{service.description}</p>
                            <p className="mt-2 text-gray-300">Main technologies: {service.Maintechnologies}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};
