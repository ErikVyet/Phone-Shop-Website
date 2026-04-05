import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { motion } from "motion/react";

function SloganSection() {
    return (
        <motion.div className="w-full h-screen flex flex-col justify-center items-center gap-5" whileInView={{ y: 0, opacity: 1 }} initial={{ y: 15, opacity: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <Typography className="text-5xl! bg-linear-to-r from-blue-500 to-green-400 bg-clip-text text-transparent text-center">Smart Phones. Smarter Choices</Typography>
            <Typography className="text-zinc-500 text-center w-5/12">Discover the latest smartphones with cutting-edge technology, competitive prices, and trusted quality—all in one place.</Typography>
            <Button href="/product" className="normal-case! text-zinc-100! bg-linear-to-r from-blue-500 to-blue-300 pl-4! pr-4! pt-2! pb-2! hover:bg-zinc-200!" color="inherit" draggable={false}>Product <ArrowRightAltOutlined/></Button>
        </motion.div>
    );
}

export default SloganSection;