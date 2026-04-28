import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import { motion } from "motion/react";
import { useContext, useState, type Dispatch, type SetStateAction } from "react";
import ProductImage from "./ProductImage";
import { ThemeContext } from "../../contexts/ThemeContext";

type ProductImageSliderProps = {
    images: string[],
    activeImageIndex: number,
    setActiveImageIndex: Dispatch<SetStateAction<number>>
}

function ProductImageSlider({ images, activeImageIndex, setActiveImageIndex }: ProductImageSliderProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;
    
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Stack className={`rounded-xl shadow-lg ${theme === "light" ? 'bg-linear-to-l from-blue-500 to-blue-300 shadow-zinc-300' : 'bg-white shadow-zinc-100'}`} position={"relative"} direction={"row"} flex={"42%"} flexGrow={0} flexShrink={0} height={"80%"} p={0.5} alignItems={"center"} justifyContent={"center"} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <Box position={"absolute"} left={0} width={"12%"} flexGrow={0} flexShrink={0} alignContent={"center"} textAlign={"center"} component={motion.div} initial={{ x: -10, opacity: 0 }} animate={{ x: isHovering ? 0 : -10, opacity: isHovering ? 1 : 0 }} transition={{ duration: 0.2 }} sx={{ pointerEvents: "none" }}>
                <IconButton onClick={() => setActiveImageIndex((prev) => prev - 1 < 0 ? images.length - 1 : prev - 1)} sx={{ pointerEvents: "auto" }}>
                    <ChevronLeft/>
                </IconButton>
            </Box>
            <Stack className="rounded-xl" direction={"row"} flex={"100%"} flexGrow={0} flexShrink={0} height={"100%"} overflow={"hidden"} alignItems={"center"}>
                {images.map((image, index) => 
                    <ProductImage key={index} image={image} isActive={index == activeImageIndex} />
                )}
            </Stack>
            <Box position={"absolute"} right={0} width={"12%"} flexGrow={0} flexShrink={0} alignContent={"center"} textAlign={"center"} component={motion.div} initial={{ x: 10, opacity: 0 }} animate={{ x: isHovering ? 0 : 10, opacity: isHovering ? 1 : 0 }} transition={{ duration: 0.2 }} sx={{ pointerEvents: "none" }}>
                <IconButton onClick={() => setActiveImageIndex((prev) => prev + 1 >= images.length ? 0 : prev + 1)} sx={{ pointerEvents: "auto" }}>
                    <ChevronRight/>
                </IconButton>
            </Box>
        </Stack>
    );
}

export default ProductImageSlider;