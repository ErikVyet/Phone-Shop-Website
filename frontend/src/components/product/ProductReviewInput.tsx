import { AccountCircle } from "@mui/icons-material";
import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { useContext, useRef, useState, type ChangeEvent } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ProductRatingInput from "./ProductRatingInput";

type ProductReviewInputProps = {
    image?: string
}

function ProductReviewInput({ image }: ProductReviewInputProps) {
    const themeContext = useContext(ThemeContext);
    if (!themeContext) return null;
    const { theme } = themeContext;

    const [isTyping, setIsTyping] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const commentInput = useRef<HTMLInputElement>(null!);

    const handleCommentChange = (_event: ChangeEvent<HTMLInputElement>) => {
        setComment(_event.target.value);
    }

    return (
        <Stack direction={"row"} width={"100%"} height={"100%"} gap={2}>
            <Box className="aspect-square" flexShrink={0} flexGrow={0}>
                {image !== undefined ? 
                    <Box className={`${isTyping ? 'size-12' : 'size-8'} aspect-square object-cover rounded-full`} bgcolor={"white"} component={"img"} src={image}/> :
                    <Box className={`${isTyping ? 'size-12' : 'size-8'} aspect-square rounded-full`}><AccountCircle className="size-full! text-zinc-400"/></Box>
                }
            </Box>
            <Stack width={"100%"} height={"100%"} gap={2}>
                <Stack direction={"row"} flex={1} gap={2} alignItems={"center"}>
                    <Input className={`flex-1 border-b ${theme === "light" ? 'text-zinc-700! border-zinc-400 hover:border-zinc-600 ' : 'text-zinc-300! border-zinc-500 hover:border-zinc-300'}`} fullWidth size="small" placeholder="Add a comment..." spellCheck={false} disableUnderline inputRef={commentInput} onFocus={() => setIsTyping(true)} onChange={handleCommentChange}/>
                    {isTyping && (
                        <ProductRatingInput valueRef={rating} setValueFn={setRating} inverted={theme === "dark"}/>
                    )}
                </Stack>
                {isTyping && (
                    <Stack direction={"row"} justifyContent={"flex-end"} gap={1.5}>
                        <Button className={`rounded-full! py-2! px-4! ${theme === "light" ? 'hover:bg-zinc-100!' : 'hover:bg-zinc-800!'}`} variant="text" color="inherit" onClick={() => { setIsTyping(false); setRating(0); setComment(""); commentInput.current.value = ""; }}>
                            <Typography className={`text-sm! ${theme === "light" ? 'text-zinc-800' : 'text-zinc-200'}`} textTransform={"none"}>Cancel</Typography>
                        </Button>
                        <Button className={`rounded-full! bg-linear-to-r ${theme === "light" ? 'from-blue-500 to-blue-300' : 'from-zinc-300 to-zinc-100'} disabled:opacity-50`} color="inherit" variant="contained" disabled={comment.trim() === ""} onClick={() => { setIsTyping(false); setRating(0); setComment(""); }}>
                            <Typography className={`text-sm! ${theme === "light" ? 'text-zinc-100' : 'text-zinc-800'}`} textTransform={"none"}>Comment</Typography>
                        </Button>
                    </Stack>
                )}
            </Stack>
        </Stack>
    );
}

export default ProductReviewInput;