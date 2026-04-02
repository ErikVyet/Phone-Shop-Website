import { Button, Stack, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { motion } from "motion/react";
import Scene from "../common/Scene";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import type { HorizontalIconListProps } from "./HorizontalIconList";
import HorizontalIconList from "./HorizontalIconList";

function InterfaceSection() {
    const technologies: HorizontalIconListProps = {
        items: [
            { size: 8, src: "/src/assets/images/tailwind.svg", invert: false, link: "" },
            { size: 8, src: "/src/assets/images/mui.png", invert: false, link: "" },
            { size: 8, src: "/src/assets/images/react.svg", invert: false, link: "" },
            { size: 8, src: "/src/assets/images/motion.svg", invert: false, link: "" },
            { size: 8, src: "/src/assets/images/three.png", invert: true, link: "" }
        ]
    }

    return (
        <Stack direction={"row"} width={"100%"} height={"100vh"}>
            <motion.div className="flex-1/2 h-full flex flex-col gap-5 justify-center items-center">
                <Typography className="text-4xl! text-zinc-100" >Modern Interface</Typography>
                <Typography className="text-zinc-400 w-2/3 text-center">We apply the best technologies to fully maximize your experiences. From realistic models which you can inpect throughly to a modern website user interface.</Typography>
                <HorizontalIconList items={technologies.items}/>
                <Button href="/playground" className="normal-case! text-zinc-600! bg-zinc-100! pl-4! pr-4! pt-2! pb-2! hover:bg-zinc-200!" color="inherit" draggable={false}>Playground <ArrowRightAltOutlined /></Button>
            </motion.div>
            <motion.div className="flex-1/2 h-full place-content-center">
                <Canvas className="w-4/5! h-4/5! bg-zinc-950! border border-white rounded-xl justify-self-center! shadow-xl! shadow-zinc-700">
                    <Scene light={4} cameraOn={false} gridOn={false} axesOn={false} />
                </Canvas>
            </motion.div>
        </Stack>
    );
}

export default InterfaceSection;