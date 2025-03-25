import { motion } from "framer-motion"
const variants = {
    open: {
        transition: {
            staggerChildren: 0.13
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    }


}
export const Links = () => {

    const items = [
        "Home",
        "About Me",
        "Technologies",
        "Services",
        "Projects",
        "Contact"
    ]

    return (
        <motion.div
            className="links"
            variants={variants}
        >
            {
                items.map(i => (
                    <motion.a key={i} href={`#${i.toLowerCase().replace(/\s+/g, '-')}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    > {i}
                    </motion.a>
                ))
            }
        </motion.div >
    )
}
