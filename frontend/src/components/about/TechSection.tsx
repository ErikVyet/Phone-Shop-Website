import { DeveloperMode } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";

function TechSection() {
    return (
        <Box className="py-20 bg-white">
            <Container maxWidth="lg">
                <Box className="flex flex-col md:flex-row gap-12 items-center">
                    <Box className="flex-1">
                        <Typography variant="h4" className="font-bold mb-6 italic">Engineered for Performance.</Typography>
                        <Typography className="text-slate-600 mb-6">
                            We didn’t just build a website; we built a high-performance application.
                            Our stack ensures that every interaction is pixel-perfect and every transaction is rock-solid.
                        </Typography>
                        <ul className="grid grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                            <li className="flex items-center gap-2"> <DeveloperMode fontSize="small" /> React & Tailwind CSS</li>
                            <li className="flex items-center gap-2"> <DeveloperMode fontSize="small" /> Framer Motion</li>
                            <li className="flex items-center gap-2"> <DeveloperMode fontSize="small" /> React Three Fiber</li>
                            <li className="flex items-center gap-2"> <DeveloperMode fontSize="small" /> Spring Boot API</li>
                        </ul>
                    </Box>
                    <Box className="flex-1 w-full aspect-video bg-slate-900 rounded-2xl p-4 shadow-2xl flex items-center justify-center">
                        <Typography className="text-slate-500 italic">
                            [ Insert Image of Code Snippet or Tech Architecture Diagram Here ]
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default TechSection;