import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "motion/react";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type PhoneCards = {
    items: {
        id: number,
        brand: string,
        name: string,
        image: string
    } []
}

function HorizontalCardList({ items = [] }: PhoneCards) {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

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
            <Box className="h-fit p-6" width={"100%"} textAlign={"center"}>
                <Typography className={`text-4xl! ${theme === "light" ? 'bg-linear-to-r from-green-500 to-green-400 bg-clip-text text-transparent' : 'text-zinc-100'}`} component={motion.span} initial={{ y: 20, opacity: 0.3 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Famous Brands</Typography>
            </Box>
            <Box className="h-[300vh]" width={"100%"} ref={container} component={motion.div}>
                <Box className={`ml-[50vw] w-fit h-screen gap-20`} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} position={"sticky"} top={0} overflow={"auto"} component={motion.div} style={{ x }}>
                    {items.map((item, index) =>
                        <Box className={`flex-[350px] ${theme === "light" ? 'p-1' : 'p-0'} bg-linear-to-t from-blue-500 to-green-300 rounded-xl shadow-2xl shadow-zinc-300`} height={"80%"} flexGrow={0} flexShrink={0} component={motion.div} initial={{ scale: 0.8, opacity: 0.5 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} key={index}>
                            <Stack className="rounded-xl" width={"100%"} height={"100%"} bgcolor={"white"} justifyContent={"center"} alignItems={"center"} textAlign={"center"} gap={2}>
                                <Typography className="text-2xl! font-semibold!" justifySelf={"center"}>{item.brand}</Typography>
                                <img className="size-2/3 w-full object-contain justify-self-center" src={item.image} draggable={false} />
                                <Typography fontStyle={"italic"} justifySelf={"center"}>{item.name}</Typography>
                                <Button className={`w-fit ${theme === "light" ? 'bg-linear-to-r from-blue-500 to-blue-300' : 'bg-blue-500!'} text-zinc-100! normal-case! rounded-md!`} endIcon={<ArrowRightAlt />} href={`/product/${item.id}`}>
                                    <Typography className="text-sm!">See more</Typography>
                                </Button>
                            </Stack>
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default HorizontalCardList;
export type { PhoneCards };