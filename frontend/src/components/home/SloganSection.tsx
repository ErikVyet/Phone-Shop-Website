import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function SloganSection() {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;
    return (
        <Box className="h-screen" component={motion.div} width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={2} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 15, opacity: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <Typography className={`text-5xl! ${theme === "light" ? 'bg-linear-to-r from-blue-500 to-green-400 bg-clip-text text-transparent' : 'text-zinc-100'}`} textAlign={"center"}>Smart Phones. Smarter Choices</Typography>
            <Typography className={`w-5/12 ${theme === "light" ? 'text-zinc-500' : 'text-zinc-400'} text-center`}>Discover the latest smartphones with cutting-edge technology, competitive prices, and trusted quality—all in one place.</Typography>
            <Button href="/product" className={`normal-case! ${theme === "light" ? 'text-zinc-100! bg-linear-to-r from-blue-500 to-blue-300' : 'text-zinc-700! bg-zinc-100!'} pl-4! pr-4! pt-2! pb-2! hover:bg-zinc-200!`} color="inherit" draggable={false}>Product <ArrowRightAltOutlined/></Button>
        </Box>
    );
}

export default SloganSection;