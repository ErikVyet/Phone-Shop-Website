import { Box, Container, Link, Stack, Typography } from "@mui/material";
import type { Phone } from "../../interfaces/Phone";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ProductRatingDisplay from "./ProductRatingDisplay";
import ProductActions from "./ProductActions";
import ProductSpecs from "./ProductSpecs";

type ProductDetailPanel = {
    phone: Phone
}

function ProductDetailPanel({ phone }: ProductDetailPanel) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const currencyFormatter = new Intl.NumberFormat(
        'vi-VN',
        { style: 'currency', currency: 'VND' }
    )

    return (
        <Container className="h-full flex-[48%] grow-0 shrink-0 place-content-center">
            <Stack className={`rounded-xl ${theme === "light" ? '' : 'shadow-lg shadow-zinc-100'}`} height={"80%"} bgcolor={theme === "light" ? 'transparent' : 'white'} py={2.5} alignItems={"center"} gap={2.5}>
                <Box width={"90%"} flexGrow={0} flexShrink={0} alignContent={"center"} justifyItems={"center"}>
                    <Typography className="text-xs! text-zinc-400" width={"100%"}>
                        <Link color="inherit" underline="none" href={"/"}>Home</Link> / <Link color="inherit" underline="none" href={"/shop"}>Shop</Link> / {phone.name}
                    </Typography>
                </Box>
                <Box width={"90%"} flexGrow={0} flexShrink={0} alignContent={"center"}>
                    <Typography className="text-4xl!">{phone.name}</Typography>
                </Box>
                <Stack direction={"row"} width={"90%"} flexGrow={0} flexShrink={0} alignItems={"center"} gap={2}>
                    <Typography className="text-xl! text-zinc-500 opacity-80">{currencyFormatter.format(phone.price)}</Typography>
                    <ProductRatingDisplay rating={4} />
                </Stack>
                <Box width={"90%"} flex={"15%"} flexGrow={0} flexShrink={0} alignContent={"center"} overflow={"hidden"}>
                    <Typography className="text-zinc-500 text-sm!" width={"100%"} height={"100%"} textOverflow={"ellipsis"}>{phone.description}</Typography>
                </Box>
                <ProductSpecs phone={phone} />
                <ProductActions />
            </Stack>
        </Container>
    );
}

export default ProductDetailPanel;