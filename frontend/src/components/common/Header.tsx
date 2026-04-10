import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Navbar from "./Navbar";
import { useState } from "react";
import { Box } from "@mui/material";

function Header() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (current > previous && current > 150) setHidden(true);
        else setHidden(false);
    });

    return (
        <Box className="h-fit" width={"100%"} component={motion.header} transition={{ duration: 0.3 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} animate={{ y: hidden ? -150 : 0, opacity: hidden ? 0 : 1 }}>
            <Navbar />
        </Box>
    );
}

export default Header;