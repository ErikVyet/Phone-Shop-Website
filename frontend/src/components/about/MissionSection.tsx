import { Devices, Security, Speed } from "@mui/icons-material";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useContext, type Ref } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { Section } from "../../interfaces/Section";

type MissionSectionProps = {
    content?: Section,
    ref?: Ref<HTMLDivElement>;
}

function MissionSection({ ref, content }: MissionSectionProps) {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

    const cards = [
        { icon: <Devices className="text-blue-500" />, title: 'Verified Listings', desc: 'Smart tech ensures what you see is what you get.' },
        { icon: <Speed className="text-green-500" />, title: 'Instant Connections', desc: 'Buyers and sellers directly, minus the headaches.' },
        { icon: <Security className="text-red-500" />, title: 'Modern Security', desc: 'Spring Boot architecture keeping transactions safe.' }
    ];

    return (
        <Container ref={ref} maxWidth="lg" className="h-screen">
            <Stack width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"} spacing={4}>
                <Typography className={`${theme === "light" ? 'text-blue-500' : 'text-zinc-100'}`} variant="h3">{content?.section}</Typography>
                <Stack textAlign={"center"} component={motion.div} alignItems={"center"} gap={2} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <Typography variant="h4" className={`${theme === "light" ? 'text-zinc-800' : 'text-zinc-100'}`}>{content?.title}</Typography>
                    <Typography className={`${theme === "light" ? 'text-zinc-500' : 'text-zinc-400'}`} width={"85%"}>
                        {content?.content}
                    </Typography>
                </Stack>
                <Grid container spacing={3}>
                    {cards.map((item, index) => (
                        <Grid size={4} key={index}>
                            <Card className="h-full shadow-md hover:shadow-xl! transition-shadow rounded-2xl border-none">
                                <CardContent className="p-6! text-center">
                                    <Box>{item.icon}</Box>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2" className="text-slate-500">{item.desc}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Container>
    );
}

export default MissionSection;