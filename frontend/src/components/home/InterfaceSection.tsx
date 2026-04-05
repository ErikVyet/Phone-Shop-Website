import { Box, Button, Stack, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { motion } from "motion/react";
import ModelScene from "../common/ModelScene";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import type { HorizontalIconListProps } from "./HorizontalIconList";
import HorizontalIconList from "./HorizontalIconList";
import { useContext } from "react";
import { ThemeContext } from "../../main";

function InterfaceSection() {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

    const technologies: HorizontalIconListProps = {
        items: [
            { src: "/src/assets/images/tailwind.svg", invert: false, link: "https://tailwindcss.com/" },
            { src: "/src/assets/images/mui.png", invert: false, link: "https://mui.com/" },
            { src: "/src/assets/images/react.svg", invert: false, link: "https://react.dev/" },
            { src: "/src/assets/images/motion.svg", invert: false, link: "https://motion.dev/" },
            { src: "/src/assets/images/three.png", invert: !(theme === "light"), link: "https://threejs.org/" }
        ]
    }

    return (
        <Stack direction={"row"} width={"100%"} height={"100vh"}>
            <motion.div className="flex-1/2 h-full flex flex-col gap-5 justify-center items-center" whileInView={{ y: 0, opacity: 1 }} initial={{ y: 15, opacity: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <Typography className={`text-4xl! ${theme === "light" ? 'text-blue-500' : 'text-zinc-100'}`}>Modern Interface</Typography>
                <Typography className={`w-2/3 ${theme === "light" ? 'text-zinc-500' : 'text-zinc-400'} text-center`}>We apply the best technologies to fully maximize your experiences. From realistic models which you can inpect throughly to a modern website user interface.</Typography>
                <HorizontalIconList items={technologies.items} />
                <Button href="/playground" className={`normal-case! ${theme === "light" ? 'bg-linear-to-r from-blue-500 to-blue-400 text-zinc-100!' : 'bg-zinc-100! text-zinc-700!'} pl-4! pr-4! pt-2! pb-2! hover:bg-zinc-200!`} color="inherit" draggable={false}>Playground <ArrowRightAltOutlined /></Button>
            </motion.div>
            <motion.div className="flex-1/2 h-full place-content-center">
                <Box className={`w-4/5 h-4/5 ${theme === "light" ? 'p-1' : 'p-0'} bg-linear-to-r from-blue-500 to-blue-300 justify-self-center rounded-xl shadow-xl shadow-zinc-700`}>
                    <Canvas className="w-full! h-full! bg-white! rounded-xl">
                        <ModelScene light={4} cameraOn={false} gridOn={false} axesOn={false} />
                    </Canvas>
                </Box>
            </motion.div>
        </Stack>
    );
}

export default InterfaceSection;