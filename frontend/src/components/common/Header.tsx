import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Navbar from "./Navbar";
import { useState } from "react";

function Header() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (current > previous && current > 150) setHidden(true);
        else setHidden(false);
    });
    return (
        <motion.header className="w-full h-fit" transition={{ duration: 0.3 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} animate={{
            y: hidden ? -150 : 0,
            opacity: hidden ? 0 : 1,
        }}>
            <Navbar />
        </motion.header>
    );
}

export default Header;