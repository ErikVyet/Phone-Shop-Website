import { Box, Button, Stack } from "@mui/material";
import { motion } from "motion/react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function BrandHorizontalMenu() {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme } = context;

    const brands = ["Apple", "Samsung", "Asus", "Huawei", "Xiaomi", "Oppo", "Vivo", "OnePlus"];
    return (
        <Stack width={"80%"} direction={"row"} flexWrap={"wrap"} flexGrow={0} flexShrink={0} gap={2} justifyContent={"center"} overflow={"auto"} sx={{ scrollbarWidth: "thin" }}>
            {brands.map((brand, index) =>
                <Button className={`hover:bg-transparent! relative p-1! ${theme === "light" ? 'text-blue-500!' : 'text-zinc-100!'}`} key={index} disableRipple component={motion.button} initial="rest" whileHover="hover">
                    {brand}
                    <Box borderBottom={1.5} borderColor={"inherit"} width={"100%"}  height={"100%"} position={"absolute"} bottom={0} component={motion.div} style={{ originX: 0.5 }} variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }} transition={{ duration: 0.2 }} />
                </Button>
            )}
        </Stack>
    );
}

export default BrandHorizontalMenu;