import { Devices, Security, Speed } from "@mui/icons-material";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useContext, type Ref } from "react";
import { ThemeContext } from "../../main";

type MissionSectionProps = {
    ref?: Ref<HTMLDivElement>;
}

function MissionSection({ ref }: MissionSectionProps) {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

    const cards = [
        { icon: <Devices className="text-blue-500" />, title: 'Verified Listings', desc: 'Smart tech ensures what you see is what you get.' },
        { icon: <Speed className="text-green-500" />, title: 'Instant Connections', desc: 'Buyers and sellers directly, minus the headaches.' },
        { icon: <Security className="text-red-500" />, title: 'Modern Security', desc: 'Spring Boot architecture keeping transactions safe.' }
    ]

    return (
        <Container ref={ref} maxWidth="lg" className="h-screen">
            <Stack width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"} spacing={4}>
                <Typography className="text-blue-500" variant="h3">Our Mission</Typography>
                <Stack className="text-center" component={motion.div} alignItems={"center"} gap={2} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <Typography variant="h4">No Junk. No Jerks. Just Better Tech.</Typography>
                    <Typography className={`w-6/7 ${theme === "light" ? 'text-zinc-500' : 'text-zinc-400'}`}>
                        We started this project with a simple question: Why is buying and selling phones so stressful?
                        Between sketchy meetups and confusing pricing, the "used" market felt broken.
                        We built this platform to give you verified listings, instant connections, and modern security.
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