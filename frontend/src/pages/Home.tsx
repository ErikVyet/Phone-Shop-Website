import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowRightAltOutlined } from "@mui/icons-material";

function Home() {
    return (
        <>
            <Stack direction={"row"} className="w-full h-140">
                <Box className="flex-6 h-full flex flex-col justify-center items-center gap-5">
                    <Typography className="text-4xl! text-zinc-100 text-center">Smart Phones. Smarter Choices</Typography>
                    <Typography className="text-zinc-400 text-center w-10/12">Discover the latest smartphones with cutting-edge technology, competitive prices, and trusted quality—all in one place.</Typography>
                    <Button href="/playground" className="normal-case! text-zinc-600! bg-zinc-100! pl-4! pr-4! pt-2! pb-2! hover:bg-zinc-200!" color="inherit">Playground <ArrowRightAltOutlined /></Button>
                </Box>
                <Box className="flex-6 h-full place-content-center justify-items-center">
                    <Canvas className="w-10/12! h-10/12! border border-zinc-100 rounded-xl">
                        <Scene model={{ modelScale: 0.03, modelUrl: '/src/assets/models/iphone_12_pro.glb' }} />
                    </Canvas>
                </Box>
            </Stack>
        </>
    )
}

export default Home;