import { Box, Stack } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { motion } from "motion/react";
import ExplodeModelScene from "../common/ExplodeModelScene";

function ShowoffSection() {
    return (
        <Stack className="w-full h-screen" direction={"row"} >
            <Box className="" height={"100%"} flex={"50%"} flexGrow={0} flexShrink={0} alignContent={"center"}>
                <Canvas className="w-5/6! h-5/6! border! border-zinc-100! rounded-xl bg-zinc-100! justify-self-center!">
                    <ExplodeModelScene/>
                </Canvas>
            </Box>
            <Stack height={"100%"} flex={"50%"} flexGrow={0} flexShrink={0} justifyContent={"center"} alignItems={"center"} gap={2}>
                <motion.text initial={{ y: 20, opacity: 0.3 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-4xl text-zinc-100">Advance Interaction</motion.text>
                <motion.text initial={{ y: 20, opacity: 0.3 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="w-2/3 text-zinc-400 text-center">With the power of technology, you can now interact with the models and inspect it's components. Take a try and scroll inside the frame!</motion.text>
            </Stack>
        </Stack>
    )
}

export default ShowoffSection;