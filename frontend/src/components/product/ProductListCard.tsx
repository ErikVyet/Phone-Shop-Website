import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Favorite, FavoriteBorder, ShoppingCart, ShoppingCartOutlined, ViewInAr, ZoomOutMap } from "@mui/icons-material";
import { motion } from "motion/react";
import { Box, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import ProductCardButtonGroup from "./ProductCardButtonGroup";
import type { Phone } from "../../interfaces/Phone";

type ProductListCardProps = {
    phone: Phone
}

function ProductListCard({ phone }: ProductListCardProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [isHover, setIsHover] = useState(false);
    const [isHoverFavorite, setIsHoverFavorite] = useState(false);
    const [isHoverCart, setIsHoverCart] = useState(false);
    const [isHoverQuickView, setIsHoverQuickView] = useState(false);
    const [isHover3DView, setIsHover3DView] = useState(false);

    const buttons = [
        { title: "Favorite", initialIcon: <Favorite component={motion.svg} initial={{ scale: 0.9 }} animate={{ scale: 1 }} />, activeIcon: <FavoriteBorder component={motion.svg} initial={{ scale: 1 }} animate={{ scale: 0.9 }} />, isHover: isHoverFavorite, setIsHover: setIsHoverFavorite },
        { title: "Put in cart", initialIcon: <ShoppingCart component={motion.svg} initial={{ scale: 0.9 }} animate={{ scale: 1 }} />, activeIcon: <ShoppingCartOutlined component={motion.svg} initial={{ scale: 1 }} animate={{ scale: 0.9 }} />, isHover: isHoverCart, setIsHover: setIsHoverCart },
        { title: "Quick view", initialIcon: <ZoomOutMap component={motion.svg} initial={{ scale: 0.9 }} animate={{ scale: 1 }} />, activeIcon: <ZoomOutMap component={motion.svg} initial={{ scale: 1 }} animate={{ scale: 0.9 }} />, isHover: isHoverQuickView, setIsHover: setIsHoverQuickView },
        { title: "3D view", initialIcon: <ViewInAr component={motion.svg} initial={{ scale: 0.9 }} animate={{ scale: 1 }} />, activeIcon: <ViewInAr component={motion.svg} initial={{ scale: 1 }} animate={{ scale: 0.9 }} />, isHover: isHover3DView, setIsHover: setIsHover3DView },
    ];

    const currencyFormatter = new Intl.NumberFormat(
        'vi-VN',
        { style: "currency", currency: "VND" }
    );

    return (
        <Card className={`size-full shadow-lg! ${theme === "light" ? '' : 'shadow-zinc-400'}`} onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)} component={motion.div} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Stack width={"100%"} height={"100%"} direction={"row"}>
                <Box className="relative aspect-square" flexGrow={0} flexShrink={0}>
                    <CardMedia className="size-full object-contain! place-content-center bg-zinc-100 hover:cursor-pointer" component={"img"} src={phone.image} />
                    <CardActions className={`absolute w-fit bottom-1/20 p-0! place-content-center justify-self-center rounded-md`}>
                        <ProductCardButtonGroup isHover={isHover} padding={4} buttons={buttons}/>
                    </CardActions>
                </Box>
                <CardContent className="w-full h-1/4" component={Stack} flex={"70%"} flexGrow={0} flexShrink={0} gap={1}>
                    <Typography className="text-zinc-700">{phone.name}</Typography>
                    <Typography className="text-zinc-500">{currencyFormatter.format(phone.price)}</Typography>
                    <Typography className="text-zinc-500">{phone.description}</Typography>
                </CardContent>
            </Stack>
        </Card>
    );
}

export default ProductListCard;