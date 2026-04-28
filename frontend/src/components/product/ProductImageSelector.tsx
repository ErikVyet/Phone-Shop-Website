import { Box, Stack } from "@mui/material";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type ProductImageSelectorProps = {
    images: string[],
    activeImageIndex: number,
    setActiveImageIndex: Dispatch<SetStateAction<number>>
}

function ProductImageSelector({ images, activeImageIndex, setActiveImageIndex }: ProductImageSelectorProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    return (
        <Stack className="h-4/5 relative" flex={"10%"} flexShrink={0} flexGrow={0} gap={2} overflow={"auto"} alignItems={"center"} sx={{ scrollbarWidth: "none"}}>
            {images.map((image, index) =>
                <Box p={0.25} key={index} className={`aspect-square cursor-pointer ${theme === "light" ? '' : 'rounded-sm'} bg-linear-to-br ${activeImageIndex == index ? `${theme === "light" ? 'from-blue-500 to-blue-300 shadow-md shadow-zinc-400' : 'from-zinc-700 to-zinc-300'}` : ''} transition-all duration-300`} flex={"80px"} width={"80px"} flexGrow={0} flexShrink={0} onClick={() => setActiveImageIndex(index)}>
                    <Box className={`aspect-square size-full ${theme === "light" ? '' : 'rounded-sm'} object-contain`} bgcolor={"white"} component={"img"} src={image} alt={image} />
                </Box>
            )}
        </Stack>
    );
}

export default ProductImageSelector;