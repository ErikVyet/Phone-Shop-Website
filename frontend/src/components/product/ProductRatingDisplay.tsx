import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import { Stack } from "@mui/material";

type ProductRatingDisplayProps = {
    rating: number,
    inverted?: boolean
}

function ProductRatingDisplay({ rating, inverted = false }: ProductRatingDisplayProps) {
    const filledStars = Array.from({ length: Math.floor(rating) });
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = Array.from({ length: 5 - filledStars.length - (halfStar ? 1 : 0) });

    return (
        <Stack direction={"row"} gap={0}>
            {filledStars.map((_, index) => 
                <Star className={`scale-70 ${inverted ? 'text-zinc-100' : 'text-zinc-700'}`} key={index}/>
            )}
            {halfStar && (<StarHalf className={`scale-70 ${inverted ? 'text-zinc-100' : 'text-zinc-700'}`}/>)}
            {emptyStars.map((_, index) => 
                <StarBorder className={`scale-70 ${inverted ? 'text-zinc-100' : 'text-zinc-700'}`} key={index} />
            )}
        </Stack>
    );
}

export default ProductRatingDisplay;