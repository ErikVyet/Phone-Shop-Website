import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { Section } from "../../interfaces/Section";

type TeamSectionProps = {
    content?: Section,
    ref?: React.Ref<HTMLDivElement>;
}

function TeamSection({ ref, content }: TeamSectionProps) {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

    const devs = [
        {
            name: 'Hoàng Quốc Việt',
            role: 'Full Stack/Lead Developer',
            description: 'Passionate about building new-era websites and logic that solves real-world problems.',
            headshot: '/src/assets/images/duck.jpg'
        },
        {
            name: 'Nguyễn Mai Lĩnh',
            role: 'Backend Developer',
            description: 'Expert in designing scalable and efficient backend systems.',
            headshot: '/src/assets/images/MikeLinh.jpg'
        },
        {
            name: 'Trần Diệp Đồng Khánh',
            role: 'Backend Developer',
            description: 'Skilled in backend development, bridging the gap between design and functionality.',
            headshot: '/src/assets/images/KhanhTran.jpg'
        }
    ]

    return (
        <Container ref={ref} className="h-screen p-0!" maxWidth="lg">
            <Stack height={"100%"}>
                <Box flex={"10%"} flexGrow={0} flexShrink={0} alignContent={"center"}>
                    <Typography variant="h4" className={`text-center ${theme === "light" ? 'text-blue-500' : 'text-zinc-100'}`}>
                        {content?.title}
                    </Typography>
                </Box>
                <Stack direction={"row"} width={"100%"} flexGrow={0} flexShrink={0} justifyContent={"space-between"}>
                    {devs.map((member, index) => (
                        <Box key={index} height={"100%"} flex={"32%"} flexGrow={0} flexShrink={0} padding={2}>
                            <Box className="rounded-xl shadow-sm" padding={2} bgcolor={"white"} overflow={"hidden"} component={motion.div} whileHover={{ y: -10 }}>
                                <Stack className="aspect-square bg-slate-200 rounded-xl" direction={"row"} justifyContent={"center"} alignItems={"center"}>
                                    <Box className="object-cover rounded-2xl" width={"100%"} height={"100%"} bgcolor={"white"} component={"img"} src={member.headshot}/>
                                </Stack>
                                <Box textAlign={"center"} padding={2}>
                                    <Typography variant="h6">{member.name}</Typography>
                                    <Typography variant="body2" className="text-blue-500">
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body2" className="text-slate-500">
                                        {member.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </Container>
    );
}

export default TeamSection;