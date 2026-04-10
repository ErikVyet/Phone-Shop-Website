import { DeveloperMode } from "@mui/icons-material";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import type { Section } from "../../interfaces/Section";
import { Canvas } from "@react-three/fiber";
import PhoneModelScene from "../common/PhoneModelScene";

type TechSectionProps = {
    content?: Section;
    ref?: React.Ref<HTMLDivElement>;
}

function TechSection({ ref, content }: TechSectionProps) {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

    const techs = [
        { label: "React", image: "/src/assets/images/react.svg" },
        { label: "Tailwind CSS", image: "/src/assets/images/tailwind.svg" },
        { label: "Material UI", image: "/src/assets/images/mui.png" },
        { label: "Framer Motion", image: "/src/assets/images/motion.svg" },
        { label: "R3F", image: "/src/assets/images/three.png" },
    ]

    return (
        <Container ref={ref} className="h-screen p-0!" maxWidth="lg" >
            <Stack height={"100%"} direction={"row"} gap={4} justifyContent={"center"} alignItems={"center"}>
                <Stack flex={"50%"} flexGrow={0} flexShrink={0} justifyContent={"center"} alignItems={"flex-start"} gap={2}>
                    <Typography variant="h3" className={`${theme === "light" ? 'text-blue-500' : 'text-zinc-100'}`}>{content?.section} Behind The Scene</Typography>
                    <Typography variant="h4" className={`${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`}>{content?.title}</Typography>
                    <Typography className={`${theme === "light" ? 'text-zinc-500' : 'text-zinc-400'}`}>
                        {content?.content}
                    </Typography>
                    <Grid width={"100%"} container spacing={2}>
                        {techs.map((tech, index) => 
                            <Grid key={index} size={4}>
                                <Stack width={"100%"} direction={"row"} alignItems={"center"} gap={1}>
                                    <DeveloperMode className={`${theme === "light" ? 'text-blue-500' : 'text-zinc-100'}`}/>
                                    <Typography className={`text-xl! ${theme === "light" ? 'text-zinc-800' : 'text-zinc-100'}`}>{tech.label}</Typography>
                                </Stack>
                            </Grid>
                        )}
                    </Grid>
                </Stack>
                <Box className={`border-dashed! ${theme === "light" ? 'border-blue-500!' : ''} rounded-xl`} border={2} height={"80%"} flex={"40%"} flexGrow={0} flexShrink={0} alignContent={"center"}>
                    <Canvas className="w-full! h-full! bg-white rounded-xl">
                        <PhoneModelScene gridOn={false} axesOn={false} cameraOn={false}/>
                    </Canvas>
                </Box>
            </Stack>
        </Container>
    )
}

export default TechSection;