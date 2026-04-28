import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import ProductReviewBox from "./ProductReviewBox";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ProductReviewInput from "./ProductReviewInput";

type ProductReviewSectionProps = {
    header?: string
}

function ProductReviewSection({ header = "" }: ProductReviewSectionProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const reviews = [
        { username: "Vyet", image: "/src/assets/images/duck.jpg", rating: 5, date: "April 27, 2026", comment: "This thing is fabulous!" },
        { username: "Mike Linh", image: "/src/assets/images/MikeLinh.jpg", rating: 4, date: "April 27, 2026", comment: "The design pays homage to Bauhaus and functionalism combining minimalistic clean lines with good quality materials, to create an aesthetically stunning outcome." },
        { username: "Khanh Tran", image: "/src/assets/images/KhanhTran.jpg", rating: 3, date: "April 27, 2026", comment: "The phone is good but the battery life could be better." }
    ]

    return (
        <Container className={`${theme === "light" ? '' : 'bg-zinc-950'}`} maxWidth={false}>
            <Stack direction={"row"} width={"95%"} justifySelf={"center"} pt={6} pb={4} alignItems={"center"} gap={3}>
                <Divider className={`flex-1 ${theme === "light" ? 'bg-zinc-300' : 'bg-zinc-500'}`}/>
                <Typography className={`font-sans! ${theme === "light" ? 'text-zinc-700' : 'text-zinc-100'}`} variant="h5">{reviews.length} reviews for "{header}"</Typography>
                <Divider className={`flex-1 ${theme === "light" ? 'bg-zinc-300' : 'bg-zinc-500'}`}/>
            </Stack>
            <Box width={"75%"} justifySelf={"center"} pb={5}>
                <ProductReviewInput />
            </Box>
            <Stack className="min-h-min" width={"75%"} alignItems={"center"} justifySelf={"center"}>
                {reviews.map((review, index) => (
                    <ProductReviewBox key={index} username={review.username} image={review.image} rating={review.rating} date={review.date} comment={review.comment} divider={index !== reviews.length - 1} />
                ))}
                <Box p={5}>
                    <Typography className="text-sm! text-zinc-500">All comments have been loaded.</Typography>
                </Box>
            </Stack>
        </Container>
    );
}

export default ProductReviewSection;