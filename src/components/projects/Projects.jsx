import "./Projects.scss"
// Agregar el journalAPP
import projectsData from "./projects.json"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react";

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        {
                            item.deploy && <a target="_blank" rel="noopener noreferrer" href={item.deploy}>See Demo</a>
                        }
                        <a target="_blank" rel="noopener noreferrer" href={item.github}>See GitHub</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export const Projects = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (

        <div className="projects" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {projectsData.projects.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

