import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type PhoneCards = {
    items: {
        brand: string,
        name: string,
        image: string
    }[]
}

function HorizontalCardList({ items = [] }: PhoneCards) {
    const flex = 350;
    const gap = 20;
    const marginLeft = window.innerWidth / 2;

    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container });
    const totalDistance = (items.length * (flex + gap)) + marginLeft;
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -totalDistance]
    );
    return (
        <>
            <Box className="w-full h-fit p-6 text-center">
                <motion.text className="text-4xl! bg-linear-to-r from-green-500 to-green-400 bg-clip-text text-transparent" initial={{ y: 20, opacity: 0.3 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Famous Brands</motion.text>
            </Box>
            <motion.div ref={container} className="w-full h-[300vh]">
                <motion.div style={{ x }} className={`ml-[50vw] sticky top-0 w-fit h-screen flex justify-evenly items-center overflow-auto gap-20`}>
                    {items.map((item, index) =>
                        <motion.div initial={{ scale: 0.8, opacity: 0.5 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} key={index} className="flex-[350px] grow-0 shrink-0 h-4/5 p-1 bg-linear-to-t from-blue-500 to-green-300 rounded-xl shadow-2xl shadow-zinc-300">
                            <Box className="bg-white w-full h-full flex flex-col rounded-xl text-center justify-center items-center gap-2">
                                <Typography className="text-2xl! font-semibold!" justifySelf={"center"}>{item.brand}</Typography>
                                <img className="size-2/3 w-full object-contain justify-self-center" src={item.image} draggable={false} />
                                <Typography className="italic" justifySelf={"center"}>{item.name}</Typography>
                                <Button className="w-fit bg-linear-to-r from-blue-500 to-blue-300 text-zinc-100! normal-case! rounded-md!">
                                    <Typography className="text-sm!">See more</Typography>
                                    <ArrowRightAlt />
                                </Button>
                            </Box>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </>
    )
}

export default HorizontalCardList;
export type { PhoneCards };