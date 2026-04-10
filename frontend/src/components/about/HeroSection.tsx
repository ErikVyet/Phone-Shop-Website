import { SouthEast } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useContext, type RefObject } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import type { Section } from "../../interfaces/Section";

type HeroSectionProps = {
    content?: Section,
    sections: { label: string, ref: RefObject<HTMLDivElement> } [];
}

function HeroSection({ sections, content }: HeroSectionProps) {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

    return (
        <Container className="h-screen place-content-center">
            <Stack width={"100%"} height={"100%"} direction={"row"} alignItems={"center"} component={motion.hgroup} initial="initial" animate="animate">
                <Stack flex={"60%"} flexGrow={0} flexShrink={0} gap={2} component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <Typography className={`text-5xl! ${theme === "light" ? 'text-zinc-800' : 'text-zinc-100'}`}>
                        {content?.title.substring(0, content.title.indexOf("You") - 1)} <Typography className={`text-5xl! ${theme === "light" ? 'text-blue-600' : 'text-zinc-100'}`}>{content?.title.substring(content.title.indexOf("You"), content.title.length)}</Typography>
                    </Typography>
                    <Typography className={`${theme === "light" ? 'text-zinc-500' : 'text-zinc-400'}`} width={"80%"}>
                        {content?.content}
                    </Typography>
                    <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
                        {sections.map((section, index) => (
                            <Button className={`${theme === "light" ? 'bg-linear-to-r from-blue-500 to-blue-400' : 'bg-zinc-100! text-zinc-700!'}`} key={index} variant="contained" color="primary" endIcon={<SouthEast />} onClick={() => section.ref.current.scrollIntoView({ behavior: "smooth" })}>
                                {section.label}
                            </Button>
                        ))}
                    </Stack>
                </Stack>
                <Stack height={"100%"} direction={"row"} flex={"40%"} flexGrow={0} flexShrink={0} justifyContent={"center"} alignItems={"center"}>
                    <Stack className={`rounded-3xl border-2 border-dashed ${theme === "light" ? 'border-blue-500' : 'border-zinc-100'}`} width={"100%"} height={"75%"} bgcolor={"white"} direction={"row"} alignItems={"center"} justifyContent={"center"}>
                        <Box className="object-contain" width={"100%"} height={"100%"} component={"img"} src={content?.image}/>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    );
}

export default HeroSection;