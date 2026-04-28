import { Box, Divider, Stack, Typography } from "@mui/material";
import ProductRatingDisplay from "./ProductRatingDisplay";
import { AccountCircle } from "@mui/icons-material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

type ProductReviewBoxProps = {
    username: string,
    image?: string,
    rating: number,
    date: string,
    comment: string,
    divider?: boolean
}

function ProductReviewBox({ username, image, rating, date, comment, divider = false}: ProductReviewBoxProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;
    
    return (
        <>
            <Stack direction={"row"} width={"100%"} gap={2}>
                <Box className="aspect-square">
                    {image !== undefined ? 
                        <Box className="size-12 aspect-square object-cover rounded-full" bgcolor={"white"} component={"img"} src={image}/> :
                        <Box className="size-12 aspect-square rounded-full"><AccountCircle className="size-full! text-zinc-400"/></Box>
                    }
                </Box>
                <Stack flex={12} width={"100%"} gap={2}>
                    <Stack direction={"row"} flex={"50%"} flexGrow={0} flexShrink={0} justifyContent={"space-between"}>
                        <Box>
                            <Typography className={`font-sans! ${theme === "light" ? 'text-zinc-800 ' : 'text-zinc-100'}`}>{username}</Typography>
                            <Typography className="text-xs! text-zinc-400 font-sans! place-content-center" height={"60%"}>{date}</Typography>
                        </Box>
                        <ProductRatingDisplay rating={rating} inverted={theme === "dark"}/>
                    </Stack>
                    <Box className="w-full" flex={"50%"} flexGrow={0} flexShrink={0}>
                        <Typography className={`line-clamp-2! text-sm! ${theme === "light" ? 'text-zinc-600' : 'text-zinc-300'}`} width={"100%"}>{comment}</Typography>
                    </Box>
                </Stack>
            </Stack>
            {divider && <Divider className={`my-6! w-full ${theme === "light" ? 'bg-zinc-200 opacity-90' : 'bg-zinc-600 opacity-80'}`}/>}
        </>
    );
}

export default ProductReviewBox;