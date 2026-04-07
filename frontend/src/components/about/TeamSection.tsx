import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "motion/react";

function TeamSection() {
    return (
        <Box className="py-20 bg-slate-50">
            <Container maxWidth="lg">
                <Typography variant="h4" className="font-bold text-center mb-16 text-slate-900">
                    Three Minds, One Goal.
                </Typography>
                <Grid container spacing={6} justifyContent="center">
                    {['Me', 'Friend 1', 'Friend 2'].map((member, index) => (
                        <Grid key={index}>
                            <motion.div whileHover={{ y: -10 }}>
                                <Box className="bg-white p-2 rounded-3xl shadow-sm overflow-hidden">
                                    <Box className="aspect-square bg-slate-200 rounded-2xl mb-6 flex items-center justify-center">
                                        <Typography className="text-slate-400">[ Headshot ]</Typography>
                                    </Box>
                                    <Box className="p-4 text-center">
                                        <Typography variant="h6" className="font-bold">{member}</Typography>
                                        <Typography variant="body2" className="text-blue-600 font-medium mb-4">
                                            {index === 0 ? 'Lead Developer' : index === 1 ? 'Backend Architect' : 'Full Stack Engineer'}
                                        </Typography>
                                        <Typography variant="body2" className="text-slate-500">
                                            Passionate about building tools that solve real-world problems.
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default TeamSection;