import { type Dispatch, type SetStateAction } from "react";
import { Stack } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

type ProductRatingInputProps = {
    valueRef: number,
    setValueFn: Dispatch<SetStateAction<number>>,
    inverted?: boolean
}

function ProductRatingInput({ valueRef, setValueFn, inverted = false }: ProductRatingInputProps) {
    return (
        <Stack direction={"row"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
            {[1, 2, 3, 4, 5].map((star, index) => (
                valueRef >= star ? 
                <Star className={`cursor-pointer ${inverted ? 'text-zinc-100' : 'text-zinc-700'}`} key={index} onClick={() => setValueFn((prev) => prev === star ? 0 : star)} /> : 
                <StarBorder className={`cursor-pointer ${inverted ? 'text-zinc-100' : 'text-zinc-700'}`} key={index} onClick={() => setValueFn(star)}/>
            ))}
        </Stack>
    );
}

export default ProductRatingInput;