import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiVite } from "react-icons/si";
import { motion } from 'framer-motion'

const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'reverse'
        },
    }
})
export const Technologies = () => {
    return (
        <div className="bg-black text-white text-center py-16 px-4 sm:px-8 lg:px-16" id="technologies">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Technologies</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
                    <motion.div
                        variants={iconVariant(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <DiReact className="text-7xl text-cyan-400 " />
                    </motion.div>
                    <motion.div
                        variants={iconVariant(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiVite className="text-7xl text-violet-400 " />
                    </motion.div>
                    <motion.div
                        variants={iconVariant(5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className="text-7xl text-green-500" />
                    </motion.div>
                    <motion.div
                        variants={iconVariant(6)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaNodeJs className="text-7xl text-green-400 " />
                    </motion.div>
                    <motion.div
                        variants={iconVariant(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiJavascriptFill className="text-7xl text-yellow-400 " />
                    </motion.div>
                    <motion.div
                        variants={iconVariant(5.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <BiLogoTypescript className="text-7xl text-blue-500 " />
                    </motion.div>
                    <motion.div
                        variants={iconVariant(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <BiLogoPostgresql className="text-7xl text-sky-700 " />
                    </motion.div>
                    <motion.div
                        variants={iconVariant(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiTailwindCssFill className="text-7xl text-cyan-400 " />
                    </motion.div>
                    <motion.div
                        variants={iconVariant(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <IoLogoCss3 className="text-7xl text-blue-600 " />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
