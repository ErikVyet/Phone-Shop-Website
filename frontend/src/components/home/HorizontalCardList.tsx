import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function HorizontalCardList() {
    const cards = [1, 2, 3, 4, 5];
    const flex = 350;
    const gap = 20;
    const marginLeft = window.innerWidth / 2;

    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container });
    const totalDistance = (cards.length * (flex + gap)) + marginLeft;
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -totalDistance]
    );
    return (
        <>
            <Box className="w-full h-fit p-6">
                <Typography className="text-zinc-100 text-4xl!" justifySelf={"center"}>Famous brands</Typography>
            </Box>
            <motion.div ref={container} className="w-full h-[300vh]">
                <motion.div style={{ x }} className={`ml-[50vw] sticky top-0 w-fit h-screen flex justify-evenly items-center overflow-auto gap-20`}>
                    {cards.map((card, index) =>
                        <Box key={index} className="flex-[350px] grow-0 shrink-0 h-4/5 bg-white rounded-xl shadow-2xl shadow-zinc-300">{card}</Box>
                    )}
                </motion.div>
            </motion.div>
        </>
    )
}

export default HorizontalCardList;