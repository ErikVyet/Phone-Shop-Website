import { SouthEast } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useContext } from "react";
import { ThemeContext } from "../../main";

function HeroSection() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const contentButtons = [
        { label: "Our Mission" },
        { label: "The Tech" },
        { label: "The Team" },
        { label: "The Marketplace" }
    ];

    return (
        <Container className="h-screen place-content-center">
            <Stack direction={"row"} component={motion.hgroup} initial="initial" animate="animate" className="w-full h-full flex items-center">
                <Stack flex={"60%"} flexGrow={0} flexShrink={0} gap={2} component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <Typography className={`text-5xl! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`}>
                        Revolutionizing the Way <Typography className={`text-5xl! ${theme === "light" ? 'text-blue-600' : 'text-zinc-100'}`}>You Trade Tech.</Typography>
                    </Typography>
                    <Typography className={`w-4/5 ${theme === "light" ? 'text-zinc-500' : 'text-zinc-400'}`}>
                        A faster, safer, and more transparent marketplace for the devices that power your life.
                        Built by developers who care about the details.
                    </Typography>
                    <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
                        {contentButtons.map((button, index) => (
                            <Button className={`${theme === "light" ? 'bg-linear-to-r from-blue-500 to-blue-400' : 'bg-zinc-100! text-zinc-700!'}`} key={index} variant="contained" color="primary" endIcon={<SouthEast />}>
                                {button.label}
                            </Button>
                        ))}
                    </Stack>
                </Stack>
                <Box height={"100%"} flex={"40%"} flexGrow={0} flexShrink={0} className="flex items-center justify-center">
                    <Box className="w-full h-4/5! bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-300">
                        <Typography className="text-slate-400 font-medium">
                            [ Insert R3F Scene or Hero Smartphone Image Here ]
                        </Typography>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
}

export default HeroSection;