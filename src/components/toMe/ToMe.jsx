import { motion } from 'framer-motion';
import scroll from "../../assets/imgStyles/scroll.png";
import NicolásCastro from '../../assets/NicolasCastro.pdf';
import ProfilePicture from '../../assets/ProfilePicture.jpeg';
import './toMe.scss';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};
export const ToMe = () => {

    return (
        <div className='hero'>
            <div className='wrapper'>
                <motion.div className='textContainer'
                    variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <motion.h2
                        variants={textVariants}
                        className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        Nicolas Castro </motion.h2>
                    <motion.h1 variants={textVariants}> Web developer and UI designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.a variants={textVariants} href='#contact'
                        >
                            Contact Me
                        </motion.a>
                        <motion.a variants={textVariants} href={NicolásCastro} target="_blank" rel="noopener noreferrer"
                        >
                            Download CV
                        </motion.a>
                    </motion.div>
                    <motion.img src={scroll}
                        variants={textVariants}
                        animate="scrollButton"
                        alt=""
                    />
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                FullStack Developer
            </motion.div>
            <motion.img
                src={ProfilePicture}
                alt='ProfilePicture'
                className='imageContainer rounded-full'
            />
        </div >
    );
};
