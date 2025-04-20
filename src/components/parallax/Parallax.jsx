import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const backgroundStyle = {
    "about-me": "linear-gradient(180deg, #111132, #0c0c1d)",
    "projects": "linear-gradient(180deg, #111132, #505064)",
    "services": "linear-gradient(180deg, #0c0c1d, #1a1a3d)",
    "technologies": "linear-gradient(180deg, #1a1a3d, #333355)",
};

const titles = {
    "about-me": "Who am I??",
    "projects": "What did I do??",
    "services": "My experience",
    "technologies": "What do I use??",
};

const showMoon = ["about-me", "services"];
// eslint-disable-next-line react/prop-types
export const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            className="parallax"
            ref={ref}
            style={{
                background: backgroundStyle[type] || "linear-gradient(180deg, #111132, #505064)",
            }}
        >
            <motion.h1 style={{ y: yText }}>
                {titles[type] || "Section"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div
                className="planets"
                style={{
                    y: yBg,
                    backgroundImage: `url(${showMoon.includes(type) ? "../../../public/imgStyles/planets.png" : "../../../public/imgStyles/sun.png"})`,
                }}
            ></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
};

