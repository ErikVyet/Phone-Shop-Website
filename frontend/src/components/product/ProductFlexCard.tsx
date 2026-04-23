import { Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { motion } from "motion/react";
import ProductCardButtonGroup from "./ProductCardButtonGroup";
import { Favorite, FavoriteBorder, ShoppingCart, ShoppingCartOutlined, ViewInAr, ZoomOutMap } from "@mui/icons-material";
import type { Phone } from "../../interfaces/Phone";

type ProductFlexCardProps = {
    index: number,
    phone: Phone
}

function ProductFlexCard({ index, phone }: ProductFlexCardProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const delayDuration = (index % 3) / 10;

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

    return (
        <Card className={`relative flex-[32%] h-120 mb-6 grow-0 shrink-0 shadow-lg! ${theme === "light" ? '' : 'shadow-zinc-400'}`} onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)} component={motion.div} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: delayDuration }}>
            <CardMedia className="w-full h-3/4 object-contain! place-content-center bg-zinc-100 hover:cursor-pointer" component={"img"} src={phone.image}/>
            <CardContent className="w-full h-1/4" component={Stack} gap={1}>
                <Typography className="text-sm! text-zinc-700">{phone.name}</Typography>
                <Typography className="text-sm! text-zinc-500">{phone.price} VND</Typography>
            </CardContent>
            <CardActions className={`absolute w-fit top-3/5 p-0! place-content-center justify-self-center rounded-md`}>
                <ProductCardButtonGroup isHover={isHover} padding={4} buttons={buttons}/>
            </CardActions>
        </Card>
    );
}

export default ProductFlexCard;