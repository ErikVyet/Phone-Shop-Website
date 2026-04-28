import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import NumberSpinner from "../common/NumberSpinner";

function ProductActions() {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [quantity, setQuantity] = useState(1);
    const [isHoveringFavorite, setIsHoveringFavorite] = useState(false);

    return (
        <Grid container width={"90%"} flex={"25%"} flexGrow={0} flexShrink={0} alignContent={"center"} spacing={2} p={0}>
            <Grid size={4}>
                <NumberSpinner value={quantity} setValueFn={setQuantity} />
            </Grid>
            <Grid size={8}>
                <Button className={`size-full rounded-xs text-zinc-100! bg-linear-to-r ${theme === "light" ? 'from-blue-500 to-blue-300' : 'from-zinc-900 to-zinc-500'}`}>
                    <Typography textTransform={"none"}>Add to cart</Typography>
                </Button>
            </Grid>
            <Grid size={4}/>
            <Grid size={8}>
                <Button className={`size-full rounded-xs bg-white! ${theme === "light" ? 'border-blue-500!' : 'border-zinc-700!'}`} variant="outlined" color="inherit" startIcon={isHoveringFavorite ? <Favorite className={`${theme === "light" ? 'text-blue-500' : 'text-zinc-700'}`} component={motion.svg} initial={{ scale: 1 }} animate={{ scale: isHoveringFavorite ? 1.1 : 1 }} /> : <FavoriteBorder className={`${theme === "light" ? 'text-blue-500' : 'text-zinc-700'}`} component={motion.svg} initial={{ scale: 1.1 }} animate={{ scale: isHoveringFavorite ? 1.1 : 1 }} />} onMouseEnter={() => setIsHoveringFavorite(true)} onMouseLeave={() => setIsHoveringFavorite(false)}>
                    <Typography className={`${theme === "light" ? 'text-blue-500' : 'text-zinc-700'}`} textTransform={"none"}>Add to wishlist</Typography>
                </Button>
            </Grid>
        </Grid>
    );
}

export default ProductActions;