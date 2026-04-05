import { Box, Stack } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { motion } from "motion/react";
import ExplodeModelScene from "../common/ExplodeModelScene";

function ShowoffSection() {
    return (
        <Stack className="w-full h-screen" direction={"row"} >
            <Box height={"100%"} flex={"50%"} flexGrow={0} flexShrink={0} alignContent={"center"}>
                <Box className="w-5/6 h-5/6 p-1 bg-linear-to-b from-blue-500 to-green-400 rounded-xl" justifySelf={"center"}>
                    <Canvas className="w-full! full! rounded-xl bg-white! justify-self-center!">
                        <ExplodeModelScene />
                    </Canvas>
                </Box>
            </Box>
            <Stack height={"100%"} flex={"50%"} flexGrow={0} flexShrink={0} justifyContent={"center"} alignItems={"center"} gap={2}>
                <motion.text initial={{ y: 20, opacity: 0.3 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-4xl text-blue-500">Advance Interaction</motion.text>
                <motion.text initial={{ y: 20, opacity: 0.3 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="w-2/3 text-zinc-500 text-center">With the power of technology, you can now interact with the models and inspect it's components. Take a try and scroll inside the frame!</motion.text>
            </Stack>
        </Stack>
    )
}

export default ShowoffSection;